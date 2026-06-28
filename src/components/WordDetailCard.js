"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useAudio } from "@/lib/useAudio";

export default function WordDetailCard({ item, prevHref, nextHref }) {
  const [playing, setPlaying] = useState(false);
  const { play } = useAudio();

  const handlePlay = useCallback(() => {
    play(item.audio);
    setPlaying(true);
    setTimeout(() => setPlaying(false), 700);
  }, [item.audio, play]);

  return (
    <div className="flex flex-col items-center justify-start flex-1 px-4 pt-2 pb-8 gap-4 max-w-sm mx-auto">

      {/* Character card — warm gradient */}
      <div
        className="w-full flex flex-col items-center rounded-3xl px-6 py-5 gap-2 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
          boxShadow: "0 8px 28px rgba(124,58,237,0.35)",
        }}
      >
        <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />

        <div dir="rtl" className="w-full flex justify-center relative z-10">
          <span
            lang="rhg"
            dir="rtl"
            className="rohingya-inline font-rohingya text-[5.5rem] leading-none text-white select-none drop-shadow-lg"
            aria-label={`Character: ${item.name}`}
          >
            {item.char}
          </span>
        </div>
        <p className="font-body text-xs font-bold tracking-widest uppercase text-center text-white/70">
          {item.name}
          <span className="font-normal text-white/40 mx-2">·</span>
          <span className="font-normal normal-case tracking-normal text-white/60">{item.latin}</span>
        </p>
      </div>

      {/* Illustration + nav */}
      <div className="relative flex items-center justify-center w-full">
        {prevHref ? (
          <Link
            href={prevHref}
            className="absolute right-0 flex items-center justify-center w-11 h-11 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            style={{ background: "linear-gradient(135deg,#F3F4F6,#E5E7EB)", boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }}
            aria-label="Previous letter"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        ) : <span className="absolute right-0 w-11" />}

        <div
          className="flex items-center justify-center w-40 h-40 text-[6.5rem] select-none rounded-3xl"
          style={{ background: "linear-gradient(135deg,#FFF7ED,#FEF3C7)", boxShadow: "0 4px 20px rgba(249,115,22,0.20)" }}
          role="img"
          aria-label={item.meaning}
        >
          {item.emoji}
        </div>

        {nextHref ? (
          <Link
            href={nextHref}
            className="absolute left-0 flex items-center justify-center w-11 h-11 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            style={{ background: "linear-gradient(135deg,#F3F4F6,#E5E7EB)", boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }}
            aria-label="Next letter"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        ) : <span className="absolute left-0 w-11" />}
      </div>

      {/* Word card — coral */}
      <div
        className="w-full flex flex-col items-center rounded-3xl px-6 py-5 gap-2 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#C2410C,#F97316)",
          boxShadow: "0 8px 28px rgba(194,65,12,0.30)",
        }}
      >
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />

        <div dir="rtl" className="w-full flex justify-center relative z-10">
          <p
            lang="rhg"
            dir="rtl"
            className="rohingya-inline font-rohingya text-[2.4rem] text-white leading-tight"
            aria-label={`Word: ${item.wordLatin}`}
          >
            {item.wordRhg}
          </p>
        </div>
        <p className="font-body text-sm italic text-white/70">{item.wordLatin}</p>
        <p className="font-body text-base font-extrabold text-white tracking-tight">{item.meaning}</p>
      </div>

      {/* Audio button */}
      <button
        onClick={handlePlay}
        className="flex items-center gap-3 px-8 py-3.5 rounded-2xl font-body font-black text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-400/50 active:scale-95"
        style={playing
          ? { background: "linear-gradient(135deg,#7C3AED,#A855F7)", color: "#fff", boxShadow: "0 6px 20px rgba(124,58,237,0.45)", transform: "scale(0.97)" }
          : { background: "linear-gradient(135deg,#F4A261,#E85D26)", color: "#fff", boxShadow: "0 6px 20px rgba(232,93,38,0.40)" }
        }
        aria-label={`Play pronunciation of ${item.wordLatin}`}
      >
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
          <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
        {playing ? "Playing…" : "Play Audio"}
      </button>
    </div>
  );
}
