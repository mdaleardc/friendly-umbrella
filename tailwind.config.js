/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          bg:     "#EAF4FB",   // page background — pale sky
          light:  "#C8E6F5",   // cloud highlight
          mid:    "#A8D4EE",   // cloud body
          deep:   "#7BB8DC",   // cloud shadow
        },
        card: {
          DEFAULT: "#CDD5F3",  // lavender-blue card fill (matches PDF)
          hover:   "#B8C3EF",
          border:  "#A9B5E8",
        },
        grass: {
          light:  "#7EC850",
          DEFAULT:"#5DAA2A",
          dark:   "#3E8A12",
        },
        ink:      "#1A1A2E",   // deep navy text
        "ink-soft":"#4A4A6A",  // secondary text
        accent:   "#4A7FD4",   // audio button blue
        white:    "#FFFFFF",
      },
      fontFamily: {
        body:     ["'Nunito'", "sans-serif"],
        rohingya: ["'Noto Sans Hanifi Rohingya'", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
        xl2:  "1rem",
      },
      boxShadow: {
        card:   "0 4px 12px rgba(100,120,200,0.15)",
        "card-hover": "0 8px 24px rgba(100,120,200,0.25)",
        btn:    "0 3px 10px rgba(74,127,212,0.35)",
      },
      animation: {
        "tap-bounce": "tapBounce 0.35s ease-out",
        "fade-up":    "fadeUp 0.4s ease-out both",
        "cloud-drift":"cloudDrift 18s ease-in-out infinite alternate",
      },
      keyframes: {
        tapBounce: {
          "0%":   { transform: "scale(1)" },
          "40%":  { transform: "scale(0.90)" },
          "75%":  { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)" },
        },
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        cloudDrift: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(12px)" },
        },
      },
    },
  },
  plugins: [],
};
