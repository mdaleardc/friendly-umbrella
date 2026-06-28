import CharacterGrid from "@/components/CharacterGrid";
import { getLessonById, getPrevLesson } from "@/lib/lessons";
import words from "@/data/words";
import Link from "next/link";

export const metadata = { 
  title: "Words — Learn Rohingya Language",
  description: "Learn a word for every letter of the Hanifi Rohingya alphabet with pictures."
};

export default function Lesson4Page() {
  const lesson = getLessonById(4);
  const prev = getPrevLesson(4);   // lesson 3

  const items = words.map((w) => ({
    ...w,
    romanized: w.emoji + " " + w.meaning,
    audio: w.audio,
  }));

  return (
    <div dir="ltr" className="flex flex-col min-h-screen bg-sky-bg">
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          {/* Left side: next lesson (none for last) */}
          <div className="flex items-center gap-2">
            {/* No next lesson */}
          </div>

          <div className="text-center">
            <h1 className="font-body text-xl font-black text-ink">
              {lesson?.title || "Words"}
            </h1>
            <span 
              lang="rhg" 
              dir="rtl" 
              className="font-rohingya text-lg text-ink-soft"
            >
              {lesson?.titleRhg || "𐴁𐴝𐴑𐴝𐴕𐴤𐴟"}
            </span>
          </div>

          {/* Right side: previous lesson */}
          <div className="flex items-center gap-2">
            {prev && (
              <Link 
                href={prev.href} 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-2xl font-bold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Previous lesson"
              >
                &gt;
              </Link>
            )}
          </div>
        </div>

        <CharacterGrid items={items} lessonHref="/lesson-4" />
      </main>
    </div>
  );
}