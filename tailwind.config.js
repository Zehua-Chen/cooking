const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      primary: colors.green,
      background: colors.zinc,
    },
    extend: {},
  },
  plugins: [],
};
