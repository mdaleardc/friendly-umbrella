import Link from "next/link";
import { LESSONS } from "@/lib/lessons";

// Each lesson gets a distinct vivid card gradient
const LESSON_STYLES = {
  purple: {
    grad: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
    shadow: "0 8px 24px rgba(124,58,237,0.35)",
    badge: "rgba(255,255,255,0.25)",
    text: "#FFFFFF",
    subtext: "rgba(255,255,255,0.75)",
  },
  blue: {
    grad: "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)",
    shadow: "0 8px 24px rgba(29,78,216,0.35)",
    badge: "rgba(255,255,255,0.25)",
    text: "#FFFFFF",
    subtext: "rgba(255,255,255,0.75)",
  },
  green: {
    grad: "linear-gradient(135deg, #065F46 0%, #10B981 100%)",
    shadow: "0 8px 24px rgba(6,95,70,0.35)",
    badge: "rgba(255,255,255,0.25)",
    text: "#FFFFFF",
    subtext: "rgba(255,255,255,0.75)",
  },
  orange: {
    grad: "linear-gradient(135deg, #C2410C 0%, #F97316 100%)",
    shadow: "0 8px 24px rgba(194,65,12,0.35)",
    badge: "rgba(255,255,255,0.25)",
    text: "#FFFFFF",
    subtext: "rgba(255,255,255,0.75)",
  },
};

function LessonCard( {
  lesson, index
}) {
  const s = LESSON_STYLES[lesson.color] || LESSON_STYLES.purple;
  const delay = `${index * 90}ms`;

  return (
    <Link
      href={lesson.href}
      style={ { animationDelay: delay }}
      className="animate-fade-up group block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 rounded-3xl"
      aria-label={`${lesson.title}: ${lesson.description}`}
      >
      <div
        className="relative flex flex-col items-center rounded-3xl p-4 gap-3 overflow-hidden
        transition-all duration-200 hover:-translate-y-1.5 hover:scale-[1.02]"
        style={ { background: s.grad, boxShadow: s.shadow }}
        >
        {/* Decorative circle blob */}
        <div
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20"
          style={ { background: "rgba(255,255,255,0.4)" }}
          />
        <div
          className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-15"
          style={ { background: "rgba(255,255,255,0.4)" }}
          />

        {/* Count badge */}
        <span
          className="self-end text-[10px] font-black px-2 py-0.5 rounded-full font-body relative z-10"
          style={ { backgroundColor: s.badge, color: s.text }}
          >
          {lesson.count}
        </span>

        {/* Character / emoji */}
        <div className="flex items-center justify-center w-14 h-14 text-4xl select-none relative z-10">
          {lesson.id === 4 ? (
            <span className="drop-shadow-lg text-5xl">{lesson.emoji}</span>
          ): (
            <span
              lang="rhg"
              dir="rtl"
              className="rohingya-inline font-rohingya text-[2.6rem] leading-none drop-shadow-lg"
              style={ { color: s.text }}
              >
              {lesson.emoji}
            </span>
          )}
        </div>

        {/* Rohingya title */}
        <div dir="rtl" className="w-full flex justify-center relative z-10">
          <p
            lang="rhg"
            dir="rtl"
            className="rohingya-inline font-rohingya text-[0.9rem] text-center leading-tight"
            style={ { color: s.subtext }}
            >
            {lesson.titleRhg}
          </p>
        </div>

        {/* English title */}
        <p
          className="font-body text-sm font-black uppercase tracking-wider text-center relative z-10"
          style={ { color: s.text }}
          >
          {lesson.title}
        </p>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div dir="ltr" className="flex flex-col min-h-full">
      <main className="flex-1 container mx-auto px-4 py-8 max-w-lg">

        {/* Hero */}
        <div className="text-center mb-8 animate-fade-up">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-4 font-body tracking-wide"
            style={ { background: "linear-gradient(90deg,#F4A261,#E85D26)", color: "#fff" }}
            >
            ✦ Free · Open
          </div>
          <h2 className="font-body text-3xl font-black tracking-tight leading-tight" style={ { color: "#2D1B4E" }}>
            Learn the Hanifi<br />
          <span style={ { background: "linear-gradient(90deg,#E85D26,#D62839)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Rohingya Script
          </span>
        </h2>
        <p className="font-body text-sm mt-2 max-w-xs mx-auto leading-relaxed" style={ { color: "#6B4F7A" }}>
          Alphabets, vowels, numbers, and words — with audio and illustrations.
        </p>
      </div>

      {/* Lesson cards */}
      <div
        className="grid grid-cols-2 gap-4 [direction:rtl]"
        role="list"
        aria-label="Lessons"
        >
        {LESSONS.map((lesson, i) => (
          <LessonCard key={lesson.id} lesson={lesson} index={i} />
        ))}
      </div>

      {/* Tip */}
      <div className="mt-8 flex items-center justify-center gap-2 animate-fade-up" style={ { animationDelay: "400ms" }}>
        <span className="w-8 h-px" style={ { background: "linear-gradient(90deg,transparent,#F4A261)" }} />
        <p className="font-body text-xs text-center" style={ { color: "#9B7BAE" }}>
          Start with <strong style={ { color: "#E85D26" }}>Alphabets</strong> and work your way through
        </p>
        <span className="w-8 h-px" style={ { background: "linear-gradient(90deg,#F4A261,transparent)" }} />
      </div>
    </main>
  </div>
);
}