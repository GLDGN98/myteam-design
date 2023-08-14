/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#014E56",
        primaryCoral: "#f67e7e",
        primaryWhite: "#ffffff",
        secondaryBlue1: "#79c8c7",
        secondaryBlue2: "#2c6269",
        secondaryGreen: "#004047",
        secondaryGreen2: "#012F34",
        secondaryGreen3: "#002529",
        lightCyan: "#C4FFFE",
      },
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
        "livvic-bold": ["Livvic-Bold", "sans-serif"],
        "livvic-semibold": ["Livvic-SemiBold", "sans-serif"],
      },
      fontSize: {
        15: "15px",
        18: "18px",
        23: "23px",
        28: "28px",
        48: "48px", // Custom font size: 48px
        64: "64px", // Custom font size: 64px
        100: "100px",
        120: "120px",
        140: "140px",
        148: "148px",
      },
      lineHeight: {
        25: "25px",
        28: "28px",
        48: "48px", // Custom line height: 48px
        56: "56px", // Custom line height: 56px
        100: "100px",
      },
      customUtilities: {
        "h1-large-livvic-bold": {
          "font-size": "100px",
          "line-height": "100px",
          "font-family": "Livvic, sans-serif",
          "font-weight": "bold",
        },
        "h1-small-livvic-bold": {
          "font-size": "64px",
          "line-height": "56px",
          "font-family": "Livvic, sans-serif",
          "font-weight": "bold",
        },
        "h2-livvic-bold": {
          "font-size": "48px",
          "line-height": "48px",
          "font-family": "Livvic, sans-serif",
          "font-weight": "bold",
        },
        "h3-livvic-bold": {
          "font-size": "18px",
          "line-height": "28px",
          "font-family": "Livvic, sans-serif",
          "font-weight": "bold",
        },
      },
    },

    variants: {},
    plugins: [],
  },
  // Include the font paths in the CSS configuration
  corePlugins: {
    preflight: false,
  },
  // purge: ["./src/**/*.html", "./src/**/*.jsx"],
  plugins: [],
}
