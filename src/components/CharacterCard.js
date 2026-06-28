"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useAudio } from "@/lib/useAudio";

// Cycling card colours — each card gets a distinct warm tint
const CARD_PALETTE = [
  { bg: "#FFF3E0", border: "#F4A261", char: "#C2410C", dot: "#F97316" }, // amber
  { bg: "#FDF2F8", border: "#E879A0", char: "#9D174D", dot: "#EC4899" }, // rose
  { bg: "#EFF6FF", border: "#60A5FA", char: "#1D4ED8", dot: "#3B82F6" }, // blue
  { bg: "#F0FDF4", border: "#4ADE80", char: "#166534", dot: "#22C55E" }, // green
  { bg: "#FDF4FF", border: "#C084FC", char: "#7E22CE", dot: "#A855F7" }, // purple
  { bg: "#FFF7ED", border: "#FB923C", char: "#9A3412", dot: "#F97316" }, // orange
];

export default function CharacterCard({ item, showName = true, index = 0, href }) {
  const [animating, setAnimating] = useState(false);
  const { play } = useAudio();

  const palette = CARD_PALETTE[index % CARD_PALETTE.length];

  const handleActivate = useCallback(() => {
    if (animating) return;
    play(item.audio);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);
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
      {/* Audio pulse dot */}
      <span
        aria-hidden="true"
        className="absolute top-2 right-2 w-2 h-2 rounded-full transition-all duration-200"
        style={{
          backgroundColor: animating ? palette.dot : palette.border + "66",
          transform: animating ? "scale(1.4)" : "scale(1)",
        }}
      />

      {/* Rohingya character */}
      <span
        lang="rhg"
        aria-hidden="true"
        dir="rtl"
        style={{
          display: "inline-block",
          color: animating ? palette.dot : palette.char,
          transition: "transform 0.15s cubic-bezier(0.34,1.56,0.64,1), color 0.15s ease",
          transform: animating ? "scale(1.45)" : "scale(1)",
        }}
        className="rohingya-inline font-rohingya text-[2.6rem] leading-none select-none"
      >
        {item.char}
      </span>

      {/* Latin label */}
      {showName && (
        <span
          dir="ltr"
          className="font-body text-[10px] font-bold mt-1 tracking-wider uppercase"
          style={{ color: palette.char + "AA" }}
        >
          {item.romanized || item.latin || item.name}
        </span>
      )}
    </>
  );

  const cardStyle = {
    backgroundColor: animating ? palette.bg : palette.bg,
    borderColor: animating ? palette.dot : palette.border + "88",
    boxShadow: animating
      ? `0 4px 16px ${palette.dot}44`
      : `0 2px 8px ${palette.border}33`,
  };

  const baseClass = [
    "relative flex flex-col items-center justify-center gap-0.5",
    "rounded-2xl border-2",
    "aspect-square w-full cursor-pointer select-none",
    "transition-all duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
    "animate-fade-up",
  ].join(" ");

  if (href) {
    return (
      <Link
        href={href}
        onClick={handleActivate}
        onKeyDown={handleKeyDown}
        style={{ animationDelay: delay, ...cardStyle }}
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
      style={{ animationDelay: delay, ...cardStyle }}
      className={baseClass}
    >
      {inner}
    </div>
  );
}
