"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useAudio } from "@/lib/useAudio";

/**
 * WordDetailCard
 * Full-screen detail: character (RTL) → emoji illustration → Rohingya word (RTL) → audio.
 *
 * Navigation arrows respect RTL reading direction:
 *   In RTL reading, "previous" (earlier in alphabet) is on the RIGHT (›)
 *   and "next" is on the LEFT (‹) — matching how an RTL reader pages through content.
 *
 *   However, since word IDs go 1→28 left-to-right in the grid,
 *   we keep ‹ left = prev id and › right = next id (grid order),
 *   which matches the reference PDF layout.
 */
export default function WordDetailCard({ item, prevHref, nextHref }) {
  const [playing, setPlaying] = useState(false);
  const { play } = useAudio();

  const handlePlay = useCallback(() => {
    play(item.audio);
    setPlaying(true);
    setTimeout(() => setPlaying(false), 700);
  }, [item.audio, play]);

  return (
    <div className="flex flex-col items-center justify-start flex-1 px-6 pt-4 pb-6 gap-4">

      {/* Large Rohingya character — RTL isolated */}
      <div dir="rtl" className="w-full flex justify-center">
        <span
          lang="rhg"
          dir="rtl"
          className="rohingya-inline font-rohingya text-[5.5rem] leading-none text-ink mt-2 select-none"
          aria-label={`Character: ${item.name}`}
        >
          {item.char}
        </span>
      </div>

      {/* Character name (Latin) */}
      <p dir="ltr" className="font-body text-sm font-bold text-ink-soft tracking-widest uppercase -mt-2">
        {item.name} &nbsp;·&nbsp; <span className="font-normal">{item.latin}</span>
      </p>

      {/* Illustration row with prev/next — PDF layout: ‹ left, emoji centre, › right */}
      {/* Illustration row */}
<div className="relative flex items-center justify-center w-full mt-1">

  {/* Previous letter (shown unless this is the first card) */}
  {prevHref && (
    <Link
      href={prevHref}
      className="absolute right-0 text-3xl text-ink-soft hover:text-ink transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg leading-none"
      aria-label="Previous letter"
    >
      ›
    </Link>
  )}

  {/* Emoji */}
  <div
    className="flex items-center justify-center w-44 h-44 text-[7rem] select-none"
    role="img"
    aria-label={item.meaning}
  >
    {item.emoji}
  </div>

  {/* Next letter (shown unless this is the last card) */}
  {nextHref && (
    <Link
      href={nextHref}
      className="absolute left-0 text-3xl text-ink-soft hover:text-ink transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg leading-none"
      aria-label="Next letter"
    >
      ‹
    </Link>
  )}

</div>
      {/* Rohingya word — rendered RTL in its own isolated block */}
      <div className="text-center mt-1 flex flex-col items-center gap-1">
        {/* The word in Hanifi script — RTL isolated container */}
        <div dir="rtl" className="w-full flex justify-center">
          <p
            lang="rhg"
            dir="rtl"
            className="rohingya-inline font-rohingya text-[2.4rem] text-ink leading-tight"
            aria-label={`Word: ${item.wordLatin}`}
          >
            {item.wordRhg}
          </p>
        </div>

        {/* Latin transliteration — LTR */}
        <p dir="ltr" className="font-body text-sm text-ink-soft italic">
          {item.wordLatin}
        </p>

        {/* English meaning */}
        <p dir="ltr" className="font-body text-base font-bold text-ink">
          {item.meaning}
        </p>
      </div>

      {/* Audio play button */}
      <button
        onClick={handlePlay}
        className={[
          "flex items-center justify-center w-16 h-16 rounded-2xl",
          "bg-card border-2 border-card-border shadow-card",
          "transition-all duration-200 mt-1",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          "active:scale-90",
          playing ? "bg-accent border-accent scale-95" : "hover:bg-card-hover",
        ].join(" ")}
        aria-label={`Play pronunciation of ${item.wordLatin}`}
      >
        <svg
          className={`w-7 h-7 ${playing ? "text-white" : "text-accent"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
          <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      </button>
    </div>
  );
}
