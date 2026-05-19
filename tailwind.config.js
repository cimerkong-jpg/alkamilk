/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#DC2626',
          gold: '#F59E0B',
          navy: '#1E3A8A',
        },
      },
      fontFamily: {
        thai: ['Sarabun', 'Noto Sans Thai', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
