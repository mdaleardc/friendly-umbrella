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
        // Background – warm off-white with personality
        "bg":         "#FDF8F5",
        "bg-soft":    "#FAF1ED",
        "surface":    "#FFFFFF",
        "surface-hover": "#FCF7F5",
        "border":     "#F0E6E0",
        
        // Text – dark charcoal (softer than pure black)
        "text":       "#1A1412",
        "text-soft":  "#5A4A44",
        "text-muted": "#8A7A74",
        
        // Primary – bold coral/terracotta (memorable)
        "primary":    "#D4603A",
        "primary-light": "#E8835E",
        "primary-soft": "#FEF0EA",
        
        // Secondary – deep teal (grounding)
        "secondary":  "#1E5F6B",
        "secondary-light": "#E2F3F5",
        
        // Accent – warm amber (energy)
        "accent":     "#E8A838",
        "accent-soft":"#FEF7E8",
        
        // Status – modernized
        "success":    "#3C8D5E",
        "warning":    "#D48C2C",
        "error":      "#C23B3B",
        "info":       "#3A7B8C",
        
        // Extras for gradient layering
        "gradient-start": "#D4603A",
        "gradient-end": "#E8835E",
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"],
        rohingya: ["var(--font-hanifi)", "sans-serif"],
      },
      borderRadius: {
        card: "1.5rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card:         "0 2px 8px rgba(26,20,18,0.06), 0 8px 24px rgba(26,20,18,0.04)",
        "card-hover": "0 8px 32px rgba(26,20,18,0.10), 0 4px 16px rgba(26,20,18,0.06)",
        btn:          "0 4px 16px rgba(212,96,58,0.35)",
      },
      keyframes: {
        tapBounce: {
          "0%":   { transform: "scale(1)" },
          "40%":  { transform: "scale(0.88)" },
          "70%":  { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)" },
        },
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideDown: {
          "0%":   { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "tap-bounce":  "tapBounce 0.36s ease",
        "fade-up":     "fadeUp 0.4s ease both",
        "slide-down":  "slideDown 0.2s ease both",
        "shimmer":     "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};