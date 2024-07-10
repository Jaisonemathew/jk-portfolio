const {nextui} = require('@nextui-org/theme');
const withMT = require("@material-tailwind/react/utils/withMT")
/** @type {import('tailwindcss').Config} */
  module.exports = withMT({
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}
);