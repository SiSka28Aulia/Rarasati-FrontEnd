/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // screens: {
    //   xs: "480px",
    //   ss: "620px",
    //   sm: "768px",
    //   md: "1060px",
    //   lg: "1200px",
    //   xl: "1700px",
    // },

    //Font Satoshi
    fontFamily: {
      fontFamily: "Satoshi-Light",
      src: "url('../fonts/Satoshi-Light.woff2') format('woff2'), url('../fonts/Satoshi-Light.woff') format('woff'), url('../fonts/Satoshi-Light.ttf') format('truetype')",
      fontWeight: "300",
      fontStyle: "normal",
    },

    fontFamily: {
      fontFamily: "Satoshi-Regular",
      src: "url('../fonts/Satoshi-Regular.woff2') format('woff2'), url('../fonts/Satoshi-Regular.woff') format('woff'), url('../fonts/Satoshi-Regular.ttf') format('truetype')",
      fontWeight: "400",
      fontStyle: "normal",
    },

    fontFamily: {
      fontFamily: "Satoshi-Medium",
      src: "url('../fonts/Satoshi-Medium.woff2') format('woff2'), url('../fonts/Satoshi-Medium.woff') format('woff'), url('../fonts/Satoshi-Medium.ttf') format('truetype')",
      fontWeight: "500",
      fontStyle: "normal",
    },

    fontFamily: {
      fontFamily: "Satoshi-Bold",
      src: "url('../fonts/Satoshi-Bold.woff2') format('woff2'), url('../fonts/Satoshi-Bold.woff') format('woff'), url('../fonts/Satoshi-Bold.ttf') format('truetype')",
      fontWeight: "700",
      fontStyle: "normal",
    },

    fontFamily: {
      fontFamily: "Satoshi-BoldItalic",
      src: "url('../fonts/Satoshi-BoldItalic.woff2') format('woff2'), url('../fonts/Satoshi-BoldItalic.woff') format('woff'), url('../fonts/Satoshi-BoldItalic.ttf') format('truetype')",
      fontWeight: "700",
      fontStyle: "italic",
    },

    //Font Inter
    fontFamily: {
      fontFamily: "Inter",
      src: "url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')",
      fontWeight: "100..900",
      fontStyle: "normal",
    },

    colors: {
      primary: "#a367b1",
      secondary: "#0C2D48",
      greyLighter: "#f8f8f8",
      greyLight: "#d9d9d9",
      white: "#ffffff",
      cyan: "#274472",
      violet: "#6664D6",
    },
  },
  plugins: [],
};
