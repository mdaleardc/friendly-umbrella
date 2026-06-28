import CharacterGrid from "@/components/CharacterGrid";
import { getLessonById, getPrevLesson, getNextLesson } from "@/lib/lessons";
import vowels from "@/data/vowels";
import Link from "next/link";

export const metadata = { 
  title: "Vowels — Learn Rohingya Language",
  description: "Learn the 10 Hanifi Rohingya vowels with pronunciation guides and examples."
};

export default function Lesson2Page() {
  const lesson = getLessonById(2);
  const prev = getPrevLesson(2);   // lesson 1
  const next = getNextLesson(2);   // lesson 3

  return (
    <div dir="ltr" className="flex flex-col min-h-screen bg-sky-bg">
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          {/* Left side: next lesson */}
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
              {lesson?.title || "Vowels"}
            </h1>
            <span 
              lang="rhg" 
              dir="rtl" 
              className="font-rohingya text-lg text-ink-soft"
            >
              {lesson?.titleRhg || "𐴝𐴇𐴝𐴌𐴤"}
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

        <CharacterGrid items={vowels} />
      </main>
    </div>
  );
}