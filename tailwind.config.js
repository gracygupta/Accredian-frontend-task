/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fly: "fly 4s linear infinite",
      },
    },
  },
  plugins: [],
};
