/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#121212",
        tertiary: "#242424",
        danger: "#FF69B4",
      },
    },
  },
  plugins: [],
};
