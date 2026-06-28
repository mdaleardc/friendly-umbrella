import CharacterGrid from "@/components/CharacterGrid";
import LessonShell from "@/components/LessonShell";
import { getLessonById, getNextLesson } from "@/lib/lessons";
import consonants from "@/data/consonants";

export const metadata = {
  title: "Alphabets — Learn Rohingya Language",
  description: "Learn the 28 Hanifi Rohingya consonants with pronunciation guides and examples."
};

export default function Lesson1Page() {
  const lesson = getLessonById(1);
  const next   = getNextLesson(1);

  return (
    <LessonShell lesson={lesson} prev={null} next={next}>
      <CharacterGrid items={consonants} />
    </LessonShell>
  );
}
