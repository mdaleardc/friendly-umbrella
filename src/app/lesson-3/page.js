import CharacterGrid from "@/components/CharacterGrid";
import LessonShell from "@/components/LessonShell";
import { getLessonById, getPrevLesson, getNextLesson } from "@/lib/lessons";
import digits from "@/data/digits";

export const metadata = {
  title: "Numbers — Learn Rohingya Language",
  description: "Learn digits 0–9 in Hanifi Rohingya with numeral recognition."
};

export default function Lesson3Page() {
  const lesson = getLessonById(3);
  const prev   = getPrevLesson(3);
  const next   = getNextLesson(3);

  const items = digits.map((d) => ({ ...d, romanized: String(d.number) }));

  return (
    <LessonShell lesson={lesson} prev={prev} next={next}>
      <CharacterGrid items={items} />
    </LessonShell>
  );
}
