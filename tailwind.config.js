/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0360D9',
        hero_bg: '#E1EEFF',
        darkgray: '#021526',
        lightblue: '#A5CCFF',

      }
    },
  },
  plugins: [],
}