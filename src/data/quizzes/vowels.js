/**
 * quizzes/vowels.js
 * Pre-built quiz questions for vowels.
 */

import vowels from "@/data/vowels";
import { buildCharQuestions } from "@/lib/quizEngine";

const vowelQuizzes = buildCharQuestions(vowels, "vowels");

export default vowelQuizzes;
