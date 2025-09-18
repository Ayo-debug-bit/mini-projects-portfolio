/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages//*.{js,ts,jsx,tsx}",
    "./components//*.{js,ts,jsx,tsx}",
    "./app//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          100: "#f4f7f5",
          200: "#e8f0eb",
          300: "#cddfd4",
          400: "#a8c3b2",
          500: "#84a890",
          600: "#5f8d6e",
          700: "#426852",
          800: "#2a4636",
          900: "#14231a",
        },
      },
    },
  },
  plugins: [],
};