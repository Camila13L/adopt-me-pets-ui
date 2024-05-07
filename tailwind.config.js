/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3490dc",
        },
        secondary: {
          DEFAULT: "#38a169",
        },
        accent: {
          DEFAULT: "#ff7e67",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
