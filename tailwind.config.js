/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#0f172a',
        third: '#64748b',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

