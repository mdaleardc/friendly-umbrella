import CharacterGrid from "@/components/CharacterGrid";
import { getLessonById, getNextLesson } from "@/lib/lessons";
import consonants from "@/data/consonants";
import Link from "next/link";

export const metadata = { 
  title: "Alphabets — Learn Rohingya Language",
  description: "Learn the 28 Hanifi Rohingya consonants with pronunciation guides and examples."
};

export default function Lesson1Page() {
  const lesson = getLessonById(1);
  const next = getNextLesson(1);   // lesson 2

  return (
    <div dir="ltr" className="flex flex-col min-h-screen bg-sky-bg">
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          {/* Left side: next lesson (if exists) */}
          <div className="flex items-center gap-2">
            {next && (
              <Link 
                href={next.href} 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-2xl font-bold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Next lesson"
              >
                &lt;
              </Link>
            )}
          </div>

          <div className="text-center">
            <h1 className="font-body text-xl font-black text-ink">
              {lesson?.title || "Alphabets"}
            </h1>
            <span 
              lang="rhg" 
              dir="rtl" 
              className="font-rohingya text-lg text-ink-soft"
            >
              {lesson?.titleRhg || "𐴀𐴝𐴁𐴟𐴊𐴝𐴕𐴤"}
            </span>
          </div>

          {/* Right side: previous lesson (none for first) */}
          <div className="flex items-center gap-2">
            {/* No previous lesson */}
          </div>
        </div>

        <CharacterGrid items={consonants} />
      </main>
    </div>
  );
}