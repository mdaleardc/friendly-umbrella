import Link from "next/link";

export const metadata = {
  title: "Quizzes — Learn Rohingya Fonna",
};

const QUIZZES = [
  {
    href:        "/quiz/consonants",
    title:       "Consonants",
    titleRhg:    "𐴀𐴝𐴁𐴟𐴊𐴝𐴕𐴤",
    description: "28 alphabet characters",
    emoji:       "𐴛",
    isRhg:       true,
    color:       { card: "#D4C8F8", border: "#B8A8F0", badge: "text-purple-700 bg-purple-100 border-purple-200" },
  },
  {
    href:        "/quiz/vowels",
    title:       "Vowels",
    titleRhg:    "𐴝𐴇𐴝𐴌𐴤",
    description: "Vowels & tone marks",
    emoji:       "𐴝",
    isRhg:       true,
    color:       { card: "#C8D8F8", border: "#A8BEF0", badge: "text-blue-700 bg-blue-100 border-blue-200" },
  },
  {
    href:        "/quiz/digits",
    title:       "Numbers",
    titleRhg:    "𐴕𐴟𐴔𐴝𐴌𐴝𐴑𐴝𐴕𐴤",
    description: "Digits 0–9",
    emoji:       "𐴱",
    isRhg:       true,
    color:       { card: "#C8EED8", border: "#A8DCB8", badge: "text-green-700 bg-green-100 border-green-200" },
  },
  {
    href:        "/quiz/words",
    title:       "Words",
    titleRhg:    "𐴁𐴝𐴑𐴝𐴕𐴤𐴟",
    description: "28 illustrated words",
    emoji:       "🥭",
    isRhg:       false,
    color:       { card: "#FAE0C0", border: "#F0C898", badge: "text-orange-700 bg-orange-100 border-orange-200" },
  },
  {
    href:        "/quiz/complex",
    title:       "Mixed",
    titleRhg:    "𐴔𐴞𐴎𐴊",
    description: "All categories — challenge mode",
    emoji:       "⭐",
    isRhg:       false,
    color:       { card: "#F8C8D8", border: "#F0A8B8", badge: "text-pink-700 bg-pink-100 border-pink-200" },
  },
];

export default function QuizHomePage() {
  return (
    <div dir="ltr" className="min-h-screen bg-sky-bg px-4 py-8 max-w-lg mx-auto flex flex-col gap-6">

      {/* Back */}
      <Link
        href="/"
        className="font-body text-sm font-semibold text-ink-soft hover:text-ink transition-colors w-fit focus-visible:outline-none"
      >
        ← Home
      </Link>

      {/* Header */}
      <div>
        <h1 className="font-body text-2xl font-black text-ink tracking-tight">Quizzes</h1>
        <p className="font-body text-sm text-ink-soft mt-1">
          Test what you have learned. 15 questions per session.
        </p>
      </div>

      {/* Quiz cards */}
      <div className="flex flex-col gap-3">
        {QUIZZES.map((q) => (
          <Link
            key={q.href}
            href={q.href}
            style={{ backgroundColor: q.color.card, borderColor: q.color.border }}
            className="flex items-center gap-4 rounded-2xl border-2 px-4 py-4 hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/60 border border-white/40 flex items-center justify-center flex-shrink-0">
              {q.isRhg ? (
                <span lang="rhg" dir="rtl" className="rohingya-inline font-rohingya text-[1.8rem] text-ink leading-none">
                  {q.emoji}
                </span>
              ) : (
                <span className="text-2xl">{q.emoji}</span>
              )}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="font-body text-base font-black text-ink">{q.title}</p>
              <p className="font-body text-xs text-ink-soft">{q.description}</p>
            </div>

            {/* Badge */}
            <span className={`font-body text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${q.color.badge}`}>
              {q.title === "Mixed" ? "🔥 Hard" : "Quiz"}
            </span>
          </Link>
        ))}
      </div>

      {/* Tip */}
      <div className="rounded-2xl border-2 border-card-border bg-white/60 px-4 py-3">
        <p className="font-body text-xs text-ink-soft leading-relaxed">
          💡 <span className="font-semibold text-ink">Tip:</span> Each session picks 15 random questions.
          Play again to get different questions. Audio questions require sound on.
        </p>
      </div>

    </div>
  );
}
