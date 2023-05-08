const colors = require('tailwind/colors')
module.exports = {
  content: ["./views/**/*.handlebars"],
  theme: {
    
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  plugins: [],
}