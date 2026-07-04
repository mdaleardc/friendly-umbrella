/**
 * quizEngine.js
 * ─────────────────────────────────────────────────────────────────
 * Generates quiz questions from source data.
 *
 * Question types:
 *   "listen"  — Play audio → choose correct char/word (4 options)
 *   "read"    — See English label (name/meaning) → choose Rohingya char/word
 *
 * Each question shape:
 * {
 *   id:       number,
 *   type:     "listen" | "read",
 *   audio:    string | null,       // for listen type
 *   prompt:   string,              // text shown to user
 *   answer:   string,              // correct char or wordRhg
 *   options:  string[],            // 4 choices (shuffled)
 *   category: "consonants" | "vowels" | "digits" | "words",
 * }
 */

/** Fisher-Yates shuffle */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick n unique random items from array, excluding one item */
function pickWrong(pool, correct, n) {
  const filtered = pool.filter((x) => x !== correct);
  return shuffle(filtered).slice(0, n);
}

/**
 * Build questions from a consonants/vowels/digits array.
 * Each item: { char, name, latin, audio }
 */
export function buildCharQuestions(items, category) {
  const allChars = items.map((i) => i.char);
  const questions = [];

  items.forEach((item, idx) => {
    // ── Type 1: Listen → choose correct char ──
    if (item.audio) {
      const wrong   = pickWrong(allChars, item.char, 3);
      const options = shuffle([item.char, ...wrong]);
      questions.push({
        id:       idx * 2 + 1,
        type:     "listen",
        audio:    item.audio,
        prompt:   "Listen and choose the correct character",
        answer:   item.char,
        options,
        category,
      });
    }

    // ── Type 2: Read name → choose correct char ──
    const label  = item.name + (item.latin ? ` (${item.latin})` : "");
    const wrong2 = pickWrong(allChars, item.char, 3);
    const opts2  = shuffle([item.char, ...wrong2]);
    questions.push({
      id:       idx * 2 + 2,
      type:     "read",
      audio:    null,
      prompt:   label,
      answer:   item.char,
      options:  opts2,
      category,
    });
  });

  return shuffle(questions);
}

/**
 * Build questions from words array.
 * Each item: { char, name, wordRhg, wordLatin, meaning, audio }
 */
export function buildWordQuestions(items) {
  const allWords = items.map((i) => i.wordRhg);
  const allChars = items.map((i) => i.char);
  const questions = [];

  items.forEach((item, idx) => {
    // ── Type 1: Listen → choose correct Rohingya word ──
    if (item.audio) {
      const wrong   = pickWrong(allWords, item.wordRhg, 3);
      const options = shuffle([item.wordRhg, ...wrong]);
      questions.push({
        id:       idx * 3 + 1,
        type:     "listen",
        audio:    item.audio,
        prompt:   "Listen and choose the correct word",
        answer:   item.wordRhg,
        options,
        category: "words",
      });
    }

    // ── Type 2: Read English meaning → choose Rohingya word ──
    const wrong2 = pickWrong(allWords, item.wordRhg, 3);
    const opts2  = shuffle([item.wordRhg, ...wrong2]);
    questions.push({
      id:       idx * 3 + 2,
      type:     "read",
      audio:    null,
      prompt:   `"${item.meaning}" in Rohingya`,
      answer:   item.wordRhg,
      options:  opts2,
      category: "words",
    });

    // ── Type 3: Read English meaning → choose starting char ──
    const wrong3 = pickWrong(allChars, item.char, 3);
    const opts3  = shuffle([item.char, ...wrong3]);
    questions.push({
      id:       idx * 3 + 3,
      type:     "read",
      audio:    null,
      prompt:   `"${item.meaning}" starts with which letter?`,
      answer:   item.char,
      options:  opts3,
      category: "words",
    });
  });

  return shuffle(questions);
}

/** Merge and shuffle questions from multiple categories */
export function buildMixedQuestions(allSets) {
  return shuffle(allSets.flat());
}
