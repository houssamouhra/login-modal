/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Young Serif", "serif"],
        custom1: ["Karla", "serif"],
      },
      keyframes: {
        fadeInBlur: {
          "0%": { opacity: "0", filter: "blur(20px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
      },
      animation: {
        fadeInBlur: "0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards fadeInBlur",
      },
    },
  },
  plugins: [],
};
