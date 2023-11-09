/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#121212",
        tertiary: "#1e1e1e",
        card: "#181818",
      },
    },
  },
  plugins: [],
};
