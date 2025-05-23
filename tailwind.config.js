/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      screens: {
        sm: "480px",
        md: "768px",
        lg: "997px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
