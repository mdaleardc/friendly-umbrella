"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useAudio } from "@/lib/useAudio";

/**
 * QuizPlayer
 * ─────────────────────────────────────────────────────────────────
 * Props:
 *   questions — full question array from quizEngine
 *   title     — quiz title
 *   mode      — "listen" | "read" | "both"
 *   onExit    — callback
 * ─────────────────────────────────────────────────────────────────
 */

const TOTAL_PER_SESSION = 15;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Web Audio sound effects — no extra files needed ── */
function playTone(type) {
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "correct") {
      // Happy rising two-tone
      osc.type      = "sine";
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.setValueAtTime(780, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.45);
    } else {
      // Low dull buzz
      osc.type      = "sawtooth";
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.setValueAtTime(130, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.35);
    }
  } catch (_) {
    // AudioContext unavailable — silent fail
  }
}

/* ── Option button ── */
function OptionBtn({ value, selected, correct, revealed, onClick }) {
  let base =
    "w-full rounded-2xl border-2 px-3 py-4 transition-all duration-200 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  let state = "";
  if (!revealed) {
    state = selected
      ? " border-accent bg-accent/10 scale-[0.97]"
      : " border-card-border bg-white/80 hover:bg-card hover:border-accent/40 cursor-pointer active:scale-95";
  } else {
    if (value === correct) {
      state = " border-green-400 bg-green-50 scale-[1.02] shadow-md";
    } else if (selected) {
      state = " border-red-400 bg-red-50";
    } else {
      state = " border-card-border bg-white/40 opacity-50";
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={revealed}
      className={base + state}
    >
      <span
        lang="rhg"
        dir="rtl"
        className="rohingya-inline font-rohingya text-[2rem] leading-none block text-center text-ink"
      >
        {value}
      </span>
    </button>
  );
}

/* ── Progress bar ── */
function ProgressBar({ current, total }) {
  return (
    <div className="w-full h-2 bg-card rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-teal-400 to-accent rounded-full transition-all duration-500"
        style={{ width: `${Math.round((current / total) * 100)}%` }}
      />
    </div>
  );
}

/* ── Score result screen ── */
function ResultScreen({ score, total, onRetry, onExit }) {
  const pct  = Math.round((score / total) * 100);
  const icon = pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "💪";
  const msg  = pct >= 80 ? "Excellent!" : pct >= 60 ? "Good job!" : "Keep practising!";

  return (
    <div className="flex flex-col items-center gap-6 py-4">
      <h2 className="font-body text-xl font-black text-ink">Quiz Complete!</h2>

      {/* Score ring */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-accent bg-white shadow-card">
          <div className="text-center">
            <p className="font-body text-3xl font-black text-ink">{score}/{total}</p>
            <p className="font-body text-sm text-ink-soft">{pct}%</p>
          </div>
        </div>
        <span className="text-4xl">{icon}</span>
        <p className="font-body text-base font-black text-ink">{msg}</p>
      </div>

      {/* Star row */}
      <div className="flex gap-1">
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={`text-lg ${i < score ? "text-yellow-400" : "text-card-border"}`}>
            {i < score ? "★" : "☆"}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-3 w-full mt-1">
        <button
          onClick={onRetry}
          className="w-full rounded-2xl border-2 border-accent bg-accent text-white font-body font-black text-base py-3.5 hover:opacity-90 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          🔄 Try Again
        </button>
        <button
          onClick={onExit}
          className="w-full rounded-2xl border-2 border-card-border bg-white/80 font-body font-semibold text-ink-soft py-3.5 hover:bg-card transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          ← Back to Quizzes
        </button>
      </div>
    </div>
  );
}

/* ── Main QuizPlayer ── */
export default function QuizPlayer({ questions, title, mode = "both", onExit }) {
  const { play } = useAudio();

  // Filter questions by mode then shuffle, pick 15
  const [session] = useState(() => {
    const filtered = mode === "both"
      ? questions
      : questions.filter((q) => q.type === mode);
    // fallback — if filtered empty (e.g. no audio files) use all
    const pool = filtered.length >= 5 ? filtered : questions;
    return shuffle(pool).slice(0, TOTAL_PER_SESSION);
  });

  const [qIndex,   setQIndex]   = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score,    setScore]    = useState(0);
  const [done,     setDone]     = useState(false);
  const timerRef = useRef(null);

  const q = session[qIndex];

  // Auto-play audio for listen questions
  useEffect(() => {
    if (q?.type === "listen" && q.audio) {
      const t = setTimeout(() => play(q.audio), 200);
      return () => clearTimeout(t);
    }
  }, [qIndex, q, play]);

  // Cleanup
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleSelect = useCallback((opt) => {
    if (revealed) return;
    const isCorrect = opt === q.answer;
    setSelected(opt);
    setRevealed(true);
    if (isCorrect) setScore((s) => s + 1);

    // Play sound effect
    playTone(isCorrect ? "correct" : "incorrect");

    // Auto-advance after 1.6s
    timerRef.current = setTimeout(() => {
      if (qIndex + 1 >= session.length) {
        setDone(true);
      } else {
        setQIndex((i) => i + 1);
        setSelected(null);
        setRevealed(false);
      }
    }, 1600);
  }, [revealed, q, qIndex, session.length]);

  const handleReplay = useCallback(() => {
    if (q?.audio) play(q.audio);
  }, [q, play]);

  const handleRetry = useCallback(() => {
    window.location.reload();
  }, []);

  /* ── Done ── */
  if (done) {
    return (
      <ResultScreen
        score={score}
        total={session.length}
        onRetry={handleRetry}
        onExit={onExit}
      />
    );
  }
  
  const answered = qIndex + (revealed ? 1 : 0);
  const incorrect = answered - score;

  /* ── Playing ── */
  return (
    <div className="flex flex-col gap-4">

      {/* Top bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onExit}
          className="font-body text-sm font-semibold text-ink-soft hover:text-ink transition-colors focus-visible:outline-none"
        >
          ← Exit
        </button>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full font-body font-bold border ${
            q.type === "listen"
              ? "bg-blue-50 border-blue-200 text-blue-700"
              : "bg-orange-50 border-orange-200 text-orange-700"
          }`}>
            {q.type === "listen" ? "🔊 Listen" : "📖 Read"}
          </span>
          <span className="font-body text-xs font-bold text-ink-soft">
            {qIndex + 1}/{session.length}
          </span>
        </div>
      </div>

      <ProgressBar current={qIndex + 1} total={session.length} />

      {/* Score tracker */}
      <div className="flex items-center justify-between px-1">
        <span className="font-body text-xs text-green-600 font-bold">✅ {score}</span>
        <span className="font-body text-xs text-red-500 font-bold">❌  {incorrect}
        </span>
      </div>

      {/* Question card */}
      <div className="rounded-2xl border-2 border-card-border bg-white/80 p-5 flex flex-col items-center gap-4 min-h-[170px] justify-center">

        {/* Listen — big speaker button */}
        {q.type === "listen" && (
          <>
            <button
              onClick={handleReplay}
              className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 hover:border-accent transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-95 shadow-card"
              aria-label="Play audio"
            >
              <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </button>
            <p className="font-body text-sm text-ink-soft text-center">
              Tap to listen again
            </p>
          </>
        )}

        {/* Read — text prompt */}
        {q.type === "read" && (
          <p className="font-body text-xl font-black text-ink text-center leading-snug px-2">
            {q.prompt}
          </p>
        )}
      </div>

      {/* Feedback banner */}
      {revealed && (
        <div className={`rounded-xl px-4 py-3 text-center font-body font-black text-sm border-2 transition-all duration-200 ${
          selected === q.answer
            ? "border-green-400 bg-green-50 text-green-800"
            : "border-red-400 bg-red-50 text-red-700"
        }`}>
          {selected === q.answer ? (
            "✅ Correct!"
          ) : (
            <span className="flex items-center justify-center gap-2 flex-wrap">
              ❌ Correct:
              <span lang="rhg" dir="rtl" className="rohingya-inline font-rohingya text-[1.4rem] leading-none">
                {q.answer}
              </span>
            </span>
          )}
        </div>
      )}

      {/* Options — 2×2 grid */}
      <div className="grid grid-cols-2 gap-3">
        {q.options.map((opt) => (
          <OptionBtn
            key={opt}
            value={opt}
            selected={selected === opt}
            correct={q.answer}
            revealed={revealed}
            onClick={() => handleSelect(opt)}
          />
        ))}
      </div>

    </div>
  );
}
