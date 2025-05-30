/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        personaRed: "#B71C1C",
        royalGold: "#FFD700",
        haruPurple: "#8E44AD",
        darkBlack: "#0a0a0a",
        creamWhite: "#fdf6f0",
        softCard: "#1f1f1f",
        vivianBlood: "#e11d48"
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
