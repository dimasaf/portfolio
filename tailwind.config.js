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
    fontSize: {
      xs: [".75rem", "1rem"],
      sm: [".875rem", "1.25rem"],
      tiny: [".875rem", "1.5rem"],
      base: [".1rem", "1.75rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "2rem"],
      "2xl": ["1.5rem", "2.25rem"],
      "3xl": ["1.875rem", "2.5rem"],
      "4xl": ["2.25rem", "1"],
      "5xl": ["3rem", "1"],
      "6xl": ["4.5rem", "1"],
      "7xl": ["5rem", "1rem"],
      "10xl": ["14rem", "1"],
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "#0E2530",
      secondary: "#F8F8F8",
      danger: "#e3342f",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
