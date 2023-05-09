/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./views/**/*.handlebars","./seeds/*.json"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.stone,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.emerald,
    },
    extend: {
      backgroundImage: {
        'hero':"url('../../Background/Project-2.jpg')"
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      }
    },
  },
  plugins: [],
}