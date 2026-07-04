/**
 * quizzes/consonants.js
 * Pre-built quiz questions for consonants.
 * Generated from consonants data — 2 question types per character.
 *
 * type "listen" → play audio → pick correct char from 4
 * type "read"   → see name (e.g. "BA (b)") → pick correct char from 4
 */

import consonants from "@/data/consonants";
import { buildCharQuestions } from "@/lib/quizEngine";

const consonantQuizzes = buildCharQuestions(consonants, "consonants");

export default consonantQuizzes;
