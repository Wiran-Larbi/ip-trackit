/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trademark: '#00447f'
      },
      fontFamily: {
        'sf': ['Sf Pro Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}

