export const LESSONS = [
  {
    id: 1,
    slug: "lesson-1",
    href: "/lesson-1",
    title: "Alphabets",
    titleRhg: "𐴇𐴥𐴡𐴌𐴡𐴉",
    description: "Learn the 28 Hanifi Rohingya consonants",
    count: 28,
    emoji: "𐴀",
    color: "purple",
    cardBg: "#D4C8F8",
    cardBorder: "#B8A8F0",
  },
  {
    id: 2,
    slug: "lesson-2",
    href: "/lesson-2",
    title: "Vowels",
    titleRhg: "𐴓𐴡𐴌𐴝 𐴇𐴥𐴡𐴌𐴡𐴉",
    description: "Learn the 10 Hanifi Rohingya vowels",
    count: 10,
    emoji: "𐴝",
    color: "blue",
    cardBg: "#C8D8F8",
    cardBorder: "#A8BEF0",
  },
  {
    id: 3,
    slug: "lesson-3",
    href: "/lesson-3",
    title: "Numbers",
    titleRhg: "𐴓𐴡𐴔𐴁𐴡𐴌",
    description: "Learn digits 0–9 in Hanifi Rohingya",
    count: 10,
    emoji: "𐴱",
    color: "green",
    cardBg: "#C8EED8",
    cardBorder: "#A8DCB8",
  },
  {
    id: 4,
    slug: "lesson-4",
    href: "/lesson-4",
    title: "Words",
    titleRhg: "𐴓𐴡𐴉𐴎𐴡𐴥",
    description: "A word for every letter — with pictures",
    count: 28,
    emoji: "🥭",
    color: "orange",
    cardBg: "#FAE0C0",
    cardBorder: "#F0C898",
  },
  {
    id: 5,
    slug: "quiz",
    href: "/quiz",
    title: "Play Quiz",
    titleRhg: "𐴑𐴟𐴤𐴞𐴎 𐴑𐴠𐴤𐴓𐴡𐴤",
    description: "Test your Rohingya knowledge with fun quizzes",
    count: 28,
    emoji: "🧩",
    color: "fuchsia",
    cardBg: "#FF0088",
    cardBorder: "#CDB7FF",
  },
];

export function getLessonById(id) {
  return LESSONS.find((l) => l.id === id) || null;
}
export function getPrevLesson(id) {
  return LESSONS.find((l) => l.id === id - 1) || null;
}
export function getNextLesson(id) {
  return LESSONS.find((l) => l.id === id + 1) || null;
}
