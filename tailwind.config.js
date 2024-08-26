/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(0, 94%, 66%)",
        SoftBlue: "hsl(231, 69%, 60%)",
        GrayishBlue: "hsl(229, 8%, 60%)",
        VeryDarkBlue: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans - serif"],
      },
      width: {
        blueWidth: "1000%",
      },
    },
  },
  plugins: [],
};
