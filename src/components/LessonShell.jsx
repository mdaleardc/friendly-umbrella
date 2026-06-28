"use client";

import Link from "next/link";

const LESSON_THEMES = {
  purple: { grad: "linear-gradient(135deg,#7C3AED,#A855F7)", shadow: "rgba(124,58,237,0.3)",  text: "#fff", sub: "rgba(255,255,255,0.75)" },
  blue:   { grad: "linear-gradient(135deg,#1D4ED8,#3B82F6)", shadow: "rgba(29,78,216,0.3)",   text: "#fff", sub: "rgba(255,255,255,0.75)" },
  green:  { grad: "linear-gradient(135deg,#065F46,#10B981)", shadow: "rgba(6,95,70,0.3)",     text: "#fff", sub: "rgba(255,255,255,0.75)" },
  orange: { grad: "linear-gradient(135deg,#C2410C,#F97316)", shadow: "rgba(194,65,12,0.3)",   text: "#fff", sub: "rgba(255,255,255,0.75)" },
};

export default function LessonShell({ lesson, prev, next, children }) {
  const t = LESSON_THEMES[lesson?.color] || LESSON_THEMES.purple;

  return (
    <div dir="ltr" className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-2 py-5 max-w-2xl">

        {/* Header band */}
        <div
          className="relative rounded-3xl px-5 py-5 mb-5 overflow-hidden"
          style={{ background: t.grad, boxShadow: `0 8px 28px ${t.shadow}` }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />

          {/* Nav row */}
          <div className="flex items-center justify-between relative z-10">
            <div className="w-10">
              {next ? (
                <Link
                  href={next.href}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label={`Next: ${next.title}`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8l4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ) : <span />}
            </div>

            <div className="text-center flex-1 px-3">
              <h1 className="font-body text-xl font-black leading-tight" style={{ color: t.text }}>
                {lesson?.title}
              </h1>
              <div dir="rtl" className="flex justify-center mt-0.5">
                <span
                  lang="rhg"
                  dir="rtl"
                  className="rohingya-inline font-rohingya text-base leading-tight"
                  style={{ color: t.sub }}
                >
                  {lesson?.titleRhg}
                </span>
              </div>
            </div>

            <div className="w-10 flex justify-end">
              {prev ? (
                <Link
                  href={prev.href}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label={`Previous: ${prev.title}`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ) : <span />}
            </div>
          </div>

          {/* Description pill */}
          <div className="flex justify-center mt-4 relative z-10">
            <span
              className="inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full font-body"
              style={{ backgroundColor: "rgba(255,255,255,0.22)", color: t.text }}
            >
              {lesson?.description}
            </span>
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
