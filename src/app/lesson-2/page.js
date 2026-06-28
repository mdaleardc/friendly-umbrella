import CharacterGrid from "@/components/CharacterGrid";
import LessonShell from "@/components/LessonShell";
import { getLessonById, getPrevLesson, getNextLesson } from "@/lib/lessons";
import vowels from "@/data/vowels";

export const metadata = {
  title: "Vowels — Learn Rohingya Language",
  description: "Learn the 10 Hanifi Rohingya vowels with pronunciation guides and examples."
};

export default function Lesson2Page() {
  const lesson = getLessonById(2);
  const prev   = getPrevLesson(2);
  const next   = getNextLesson(2);

  return (
    <LessonShell lesson={lesson} prev={prev} next={next}>
      <CharacterGrid items={vowels} />
    </LessonShell>
  );
}
