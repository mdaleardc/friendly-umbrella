import Link from "next/link";
import GrassFooter from "@/components/GrassFooter";
import { LESSONS } from "@/lib/lessons";

function LessonCard({ lesson, index }) {
  const delay = `${index * 80}ms`;
  return (
    <Link
      href={lesson.href}
      style={{
        animationDelay: delay,
        backgroundColor: lesson.cardBg,
        borderColor: lesson.cardBorder,
      }}
      className="flex-1 min-w-0 flex flex-col items-center justify-between rounded-[1.1rem] border-2 p-3 gap-2 animate-fade-up hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`${lesson.title}: ${lesson.description}`}
    >
      {/* Character / emoji — RTL isolated for Rohingya chars */}
      <div className="flex items-center justify-center w-14 h-14 text-4xl select-none">
        {lesson.id === 4 ? (
          <span>{lesson.emoji}</span>
        ) : (
          <span
            lang="rhg"
            dir="rtl"
            className="rohingya-inline font-rohingya text-[2.2rem] text-ink leading-none"
          >
            {lesson.emoji}
          </span>
        )}
      </div>

      {/* Rohingya title — RTL isolated */}
      <div dir="rtl" className="w-full flex justify-center">
        <p
          lang="rhg"
          dir="rtl"
          className="rohingya-inline font-rohingya text-[0.85rem] text-ink text-center leading-tight"
        >
          {lesson.titleRhg}
        </p>
      </div>

      {/* English label — LTR */}
      <p dir="ltr" className="font-body text-xs font-bold text-ink-soft text-center leading-none">
        {lesson.title}
      </p>
    </Link>
  );
}

export default function HomePage() {
  // Order from right to left: Alphabets, Vowels, Numbers, Words
  const rtlOrderedLessons = [LESSONS[0], LESSONS[1], LESSONS[2], LESSONS[3]];
  // Or simply: const rtlOrderedLessons = LESSONS; // since LESSONS is already [Alphabets, Vowels, Numbers, Words]

  return (
    <div dir="ltr" className="flex flex-col min-h-full bg-sky-bg">
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Welcome section */}
        <div className="text-center mb-8">
          <h2 className="font-body text-2xl font-black text-ink tracking-tight">
            Welcome to Your Learning Journey! 🎉
          </h2>
          <p className="font-body text-sm text-ink-soft mt-2 max-w-md mx-auto">
            Choose a lesson below to start learning the Hanifi Rohingya script
          </p>
        </div>

        {/* 4 lesson cards – RTL order: Alphabets, Vowels, Numbers, Words */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" 
          role="list" 
          aria-label="Lessons"
          dir="rtl"
        >
          {LESSONS.map((lesson, i) => (
            <LessonCard key={lesson.id} lesson={lesson} index={i} />
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-8 text-center">
          <p className="font-body text-xs text-ink-soft">
            💡 Tip: Each lesson builds on the previous one. Start with Alphabets!
          </p>
        </div>
      </main>

      <GrassFooter />
    </div>
  );
}