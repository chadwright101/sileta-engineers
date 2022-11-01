/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/index.pug", "./src/**/*.{js,ts,jsx,tsx,pug}"],
  theme: {
    extend: {
      colors: {
        siletaGreen: "rgb(50, 94, 104)",
        siletaLightgreen: "rgba(50, 94, 104, 0.5)",
        siletaLightgrey: "rgba(50, 94, 104, 0.12)",
        siletaGrey: "rgba(25,25,25,0.5)",
        siletaBlack: "#191919",
      },
      fontSize: {
        siletaSmall: "0.938rem",
        siletaBody: ["1.125rem", "28px"],
        siletaMedium: "1.375rem",
        siletaPageheading: "2.5rem",
        siletaLarge: "1.5rem",
        siletaXL: "2.313rem",
        siletaXXL: "3.563rem",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
