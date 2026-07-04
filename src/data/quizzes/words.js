/**
 * quizzes/words.js
 * Pre-built quiz questions for words.
 * 3 question types per word:
 *   1. Listen → pick correct Rohingya word
 *   2. Read English meaning → pick correct Rohingya word
 *   3. Read English meaning → pick starting consonant
 */

import words from "@/data/words";
import { buildWordQuestions } from "@/lib/quizEngine";

const wordQuizzes = buildWordQuestions(words);

export default wordQuizzes;
