/**
 * quizzes/digits.js
 * Pre-built quiz questions for digits.
 */

import digits from "@/data/digits";
import { buildCharQuestions } from "@/lib/quizEngine";

// Map digits so "name" shows the numeral + Rohingya name
const digitItems = digits.map((d) => ({
  ...d,
  name: `${d.number} — ${d.name}`,
  latin: d.latin,
}));

const digitQuizzes = buildCharQuestions(digitItems, "digits");

export default digitQuizzes;
