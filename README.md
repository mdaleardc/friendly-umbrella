# Rohingya Fonna App

A child-friendly, offline-first PWA for learning the Hanifi Rohingya script.
Modelled after the reference app design: sky + clouds header, lavender cards, grass footer.

## Stack
Next.js 15 App Router · JavaScript · Tailwind CSS · next-pwa

## Quick Start
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production + PWA
```

## Routes
| Route | Description |
|-------|-------------|
| `/` | Home — 4 lesson cards |
| `/lesson-1` | Alphabets (28 consonants) |
| `/lesson-2` | Vowels (10) |
| `/lesson-3` | Numbers (10 digits) |
| `/lesson-4` | Words grid (28 — one per consonant) |
| `/lesson-4/[id]` | Word detail: character + emoji + audio |

## Audio Files
Drop MP3s into:
```
public/audio/consonants/1.mp3 … 28.mp3
public/audio/vowels/1.mp3     … 10.mp3
public/audio/digits/1.mp3     … 10.mp3
public/audio/words/1.mp3      … 28.mp3
```
Missing files are silently ignored — no errors.

## PWA Icons
Place PNG files in `public/icons/`:
- `icon-192.png` (192×192)
- `icon-512.png` (512×512)

## Font
Uses **Noto Sans Hanifi Rohingya** via Google Fonts.
For self-hosting (offline font), download the `.woff2` and add a `@font-face` in `globals.css`.

## Adding Words / Characters
Edit the arrays in `src/data/`. Each object needs: `id`, `char`, `name`, `audio`, and for words: `wordRhg`, `wordLatin`, `meaning`, `emoji`.
