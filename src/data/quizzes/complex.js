/**
 * quizzes/complex.js
 * Mixed quiz — consonants + vowels + digits + words all shuffled together.
 */

import consonants from "@/data/consonants";
import vowels     from "@/data/vowels";
import digits     from "@/data/digits";
import words      from "@/data/words";
import {
  buildCharQuestions,
  buildWordQuestions,
  buildMixedQuestions,
} from "@/lib/quizEngine";

const digitItems = digits.map((d) => ({
  ...d,
  name: `${d.number} — ${d.name}`,
}));

const complexQuizzes = buildMixedQuestions([
  buildCharQuestions(consonants, "consonants"),
  buildCharQuestions(vowels,     "vowels"),
  buildCharQuestions(digitItems, "digits"),
  buildWordQuestions(words),
]);

export default complexQuizzes;
