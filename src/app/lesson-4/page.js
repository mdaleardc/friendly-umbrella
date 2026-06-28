import CharacterGrid from "@/components/CharacterGrid";
import LessonShell from "@/components/LessonShell";
import { getLessonById, getPrevLesson } from "@/lib/lessons";
import words from "@/data/words";

export const metadata = {
  title: "Words — Learn Rohingya Language",
  description: "Learn a word for every letter of the Hanifi Rohingya alphabet with pictures."
};

export default function Lesson4Page() {
  const lesson = getLessonById(4);
  const prev   = getPrevLesson(4);

  const items = words.map((w) => ({
    ...w,
    romanized: w.emoji + " " + w.meaning,
    audio: w.audio,
  }));

  return (
    <LessonShell lesson={lesson} prev={prev} next={null}>
      <CharacterGrid items={items} lessonHref="/lesson-4" />
    </LessonShell>
  );
}
