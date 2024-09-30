/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shfOrange: "#F4911F",
        shfPurple: "#483081",
      },
    },
  },
  plugins: [],
};
