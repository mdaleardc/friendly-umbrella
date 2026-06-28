/**
 * Rohingya Hanifi Vowels and Tone Markers
 * Source: Unicode reference chart — "Vowels and tone markers" section
 * Exact data from the image:
 *   U+10D1D  aa-for / a   /a/      Vowel
 *   U+10D1E  i-for  / i   /i/      Vowel
 *   U+10D1F  u-for  / u   /u/      Vowel
 *   U+10D20  e-for  / e   /e/      Vowel
 *   U+10D21  o-for  / o   /o/      Vowel
 *   U+10D22  Sakin (Ttura/Les)      Vowel silencer
 *   U+10D23  Na-Khonna              Nasalization mark
 *   U+10D24  Harbai  á              Short high tone
 *   U+10D25  Tela    áa             Long falling tone
 *   U+10D26  Tana    aá             Long rising tone
 *   U+10D27  Tassi                  Double consonant (gemination)
 */
const vowels = [
  {
    id: 1,
    char: "𐴝",
    name: "AA-FOR",
    latin: "a",
    arabic: "◌",
    ipa: "/a/",
    type: "Vowel",
    description: "Short vowel A",
    unicode: "U+10D1D",
    audio: "/audio/vowels/1.mp3",
  },
  {
    id: 2,
    char: "𐴞",
    name: "I-FOR",
    latin: "i",
    arabic: "◌",
    ipa: "/i/",
    type: "Vowel",
    description: "Short vowel I",
    unicode: "U+10D1E",
    audio: "/audio/vowels/2.mp3",
  },
  {
    id: 3,
    char: "𐴟",
    name: "U-FOR",
    latin: "u",
    arabic: "◌",
    ipa: "/u/",
    type: "Vowel",
    description: "Short vowel U",
    unicode: "U+10D1F",
    audio: "/audio/vowels/3.mp3",
  },
  {
    id: 4,
    char: "𐴠",
    name: "E-FOR",
    latin: "e",
    arabic: "◌",
    ipa: "/e/",
    type: "Vowel",
    description: "Short vowel E",
    unicode: "U+10D20",
    audio: "/audio/vowels/4.mp3",
  },
  {
    id: 5,
    char: "𐴡",
    name: "O-FOR",
    latin: "o",
    arabic: "◌",
    ipa: "/o/",
    type: "Vowel",
    description: "Short vowel O",
    unicode: "U+10D21",
    audio: "/audio/vowels/5.mp3",
  },
  /*{
    id: 6,
    char: "𐴢",
    name: "SAKIN",
    latin: "—",
    arabic: "◌",
    ipa: "none",
    type: "Vowel silencer",
    description: "Ttura / Les — silences preceding vowel",
    unicode: "U+10D22",
    audio: "/audio/vowels/6.mp3",
  },*/
  {
    id: 7,
    char: "𐴣",
    name: "NA-KHONNA",
    latin: "ñ",
    arabic: "◌",
    ipa: "/ñ/",
    type: "Nasalization mark",
    description: "Full letter nasalization",
    unicode: "U+10D23",
    audio: "/audio/vowels/6.mp3",
  },
  {
    id: 8,
    char: "𐴤",
    name: "HARBAI",
    latin: "á",
    arabic: "◌",
    ipa: "/ˈ/",
    type: "Tone — Short high",
    description: "Acute accent — short high tone",
    unicode: "U+10D24",
    audio: "/audio/vowels/7.mp3",
  },
  {
    id: 9,
    char: "𐴥",
    name: "TELA",
    latin: "áa",
    arabic: "◌",
    ipa: "/ˈˌ/",
    type: "Tone — Long falling",
    description: "Double acute at first — long falling tone",
    unicode: "U+10D25",
    audio: "/audio/vowels/8.mp3",
  },
  {
    id: 10,
    char: "𐴦",
    name: "TANA",
    latin: "aá",
    arabic: "◌",
    ipa: "/ˌˈ/",
    type: "Tone — Long rising",
    description: "Double acute at second — long rising tone",
    unicode: "U+10D26",
    audio: "/audio/vowels/9.mp3",
  },
  {
    id: 11,
    char: "𐴧",
    name: "TASSI",
    latin: "—",
    arabic: "◌",
    ipa: "—",
    type: "Gemination",
    description: "Double consonant mark (Tassi / Shadda)",
    unicode: "U+10D27",
    audio: "/audio/vowels/10.mp3",
  },
];

export default vowels;
