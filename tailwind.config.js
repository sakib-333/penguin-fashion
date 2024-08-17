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
      "penguin-200": "#A4BC46",
      "penguin-300": "#85A019",
      t1: "#FABE4C",
      t2: "#363958",
      t3: "#3E3E3E",
      t4: "#ffffff",
    },
  },
  plugins: [],
};
