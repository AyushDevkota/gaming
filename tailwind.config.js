/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        table: "#0A0A0A",
        bg: "#141414",
        divider: "#1F1F1F",
        border: "#333333",
        disable: "#4D4D4D",
        primary: "#D9D9D9",
        secondary: "#737373",
        dark: "#2a2a2a",
        light: "#878787",
      },
      container: {
        center: true,
      },
      backgroundImage: {
        banner: "url('../public/banner.png')",
        redOverlay: "url('../public/red-overlay.png')",
      }
    },
  },
  plugins: [],
};