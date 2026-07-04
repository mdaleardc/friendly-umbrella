"use client";

import { useState } from "react";
import Link from "next/link";
import QuizPlayer from "@/components/QuizPlayer";
import questions from "@/data/quizzes/digits";

const TITLE = "Numbers Quiz";
const DESC  = "Rohingya digits 0–9";

/* ── Mode card ── */
function ModeCard({ icon, label, sublabel, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 rounded-2xl border-2 p-5 w-full transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        selected
          ? "border-accent bg-accent/10 shadow-card"
          : "border-card-border bg-white/80 hover:bg-card hover:border-accent/40"
      }`}
    >
      <span className="text-4xl">{icon}</span>
      <p className="font-body text-base font-black text-ink">{label}</p>
      <p className="font-body text-xs text-ink-soft text-center leading-relaxed">{sublabel}</p>
    </button>
  );
}

export default function QuizPage() {
  const [mode,    setMode]    = useState(null);   // null = on setup screen
  const [started, setStarted] = useState(false);

  /* ── Playing ── */
  if (started && mode) {
    return (
      <div dir="ltr" className="min-h-screen bg-sky-bg px-4 py-8 max-w-lg mx-auto">
        <QuizPlayer
          questions={questions}
          title={TITLE}
          mode={mode}
          onExit={() => { setStarted(false); setMode(null); }}
        />
      </div>
    );
  }

  /* ── Setup screen ── */
  return (
    <div dir="ltr" className="min-h-screen bg-sky-bg px-4 py-8 max-w-lg mx-auto flex flex-col gap-6">

      {/* Back */}
      <Link
        href="/quiz"
        className="font-body text-sm font-semibold text-ink-soft hover:text-ink transition-colors w-fit focus-visible:outline-none"
      >
        ← Quizzes
      </Link>

      {/* Title */}
      <div>
        <h1 className="font-body text-2xl font-black text-ink">{TITLE}</h1>
        <p className="font-body text-sm text-ink-soft mt-1">{DESC}</p>
      </div>

      {/* Mode picker */}
      <div className="flex flex-col gap-3">
        <p className="font-body text-sm font-black text-ink">Choose quiz mode:</p>

        <div className="grid grid-cols-3 gap-3">
          <ModeCard
            icon="🔊"
            label="Listen"
            sublabel="Hear the sound — pick the correct character"
            selected={mode === "listen"}
            onClick={() => {setMode("listen"); setStarted(true)}}
          />
          <ModeCard
            icon="📖"
            label="Read"
            sublabel="See the name — pick the correct character"
            selected={mode === "read"}
            onClick={() => {setMode("read"); setStarted(true)}}
          />
          <ModeCard
            icon="🔀"
            label="Both"
            sublabel="Mix of listen and read questions"
            selected={mode === "both"}
            onClick={() => {setMode("both"); setStarted(true)}}
          />
        </div>
      </div>

      {/* Info */}
      <div className="rounded-2xl border-2 border-card-border bg-white/60 px-4 py-3 flex flex-col gap-1.5">
        <p className="font-body text-xs text-ink-soft">
          🔊 <span className="font-semibold text-ink">Listen mode</span> — tap the speaker button and choose the matching character or word. No English reading needed.
        </p>
        <p className="font-body text-xs text-ink-soft">
          📖 <span className="font-semibold text-ink">Read mode</span> — see the English name or meaning and choose the correct Rohingya character.
        </p>
        <p className="font-body text-xs text-ink-soft">
          🔀 <span className="font-semibold text-ink">Both</span> — mixed questions from both modes.
        </p>
        <p className="font-body text-xs text-ink-soft mt-1">
          ✅ 15 questions · Sound effects for correct/wrong answers
        </p>
      </div>
    </div>
  );
}
