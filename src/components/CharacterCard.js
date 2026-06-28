"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useAudio } from "@/lib/useAudio";

/**
 * CharacterCard
 * Lavender card showing one Rohingya character (RTL script).
 * The card layout itself is LTR (label below character).
 * The character span is RTL-isolated so it renders correctly.
 */
export default function CharacterCard({ item, showName = true, index = 0, href }) {
  const [animating, setAnimating] = useState(false);
  const { play } = useAudio();

  const handleActivate = useCallback(() => {
    if (animating) return;
    play(item.audio);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 360);
  }, [animating, item.audio, play]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleActivate();
    }
  }, [handleActivate]);

  const delay = `${(index % 10) * 50}ms`;

  const inner = (
    <>
      {/* Rohingya character — RTL isolated, centred in the card */}
      <span
        lang="rhg"
        aria-hidden="true"
        dir="rtl"
        className="rohingya-inline font-rohingya text-[2.6rem] leading-none text-ink select-none"
      >
        {item.char}
      </span>

      {/* Latin label — stays LTR */}
      {showName && (
        <span
          dir="ltr"
          className="font-body text-[11px] font-semibold text-ink-soft mt-1 tracking-wide"
        >
          {item.romanized || item.latin || item.name}
        </span>
      )}
    </>
  );

  const baseClass = [
    "flex flex-col items-center justify-center gap-0.5",
    "rounded-[1.1rem] border-2 border-card-border bg-card",
    "aspect-square w-full cursor-pointer select-none",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1",
    "active:scale-90 animate-fade-up",
    animating ? "animate-tap-bounce" : "hover:bg-card-hover hover:shadow-card",
  ].join(" ");

  if (href) {
    return (
      <Link
        href={href}
        onClick={handleActivate}
        onKeyDown={handleKeyDown}
        style={{ animationDelay: delay }}
        className={baseClass}
        aria-label={`${item.name}${item.meaning ? ", " + item.meaning : ""}. Tap to hear.`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${item.name}, ${item.latin || item.romanized || ""}. Tap to hear.`}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      style={{ animationDelay: delay }}
      className={baseClass}
    >
      {inner}
    </div>
  );
}
