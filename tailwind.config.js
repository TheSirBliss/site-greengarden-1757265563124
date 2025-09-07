/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2E7D32',
        'secondary': '#A5D6A7',
        'accent': '#FFC107',
      },
    },
  },
  plugins: [],
}