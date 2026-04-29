/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["Instrument Serif", "serif"],
      },
      colors: {
        laiax: {
          ink: "#0A0A0B",
          paper: "#F5F4F0",
          accent: "#00D27A",
        },
      },
    },
  },
  plugins: [],
};