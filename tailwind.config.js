/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trademark: '#2C74B3'
      },
      fontFamily: {
        'sf': ['Sf Pro Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}

