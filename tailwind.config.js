/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],  // DEFAULT FONT
        alumni: ["Alumni Sans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Great: ["Great Vibes", "cursive"],
        Kugile: ["Kugile"],
        garamond: ["EB Garamond", "serif"],


      },
    },
  },
  plugins: [],
}
