/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      bebasNneue: ["Bebas Neue", "sans-serif"],
    },
    colors: {
      "penguin-100": "#FFFBF0",
    },
  },
  plugins: [],
};
