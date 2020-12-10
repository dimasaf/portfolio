const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Gilroy", "Graphik", "sans-serif"],
      serif: ["Chronicle Display", "Bentham", "Merriweather", "serif"],
    },
    letterSpacing: {
      normal: ".1em",
      wide: ".2em",
      widest: ".4em",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
