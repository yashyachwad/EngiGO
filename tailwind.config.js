/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   safelist: [
    'animate-spin-slow',
    'hover:animate-spin-slow'
  ],
  theme: {
    extend: {
      fontFamily: {
        coda: ['"Coda"', 'sans-serif'],
        gorditas: ['"Gorditas"', 'cursive'],
        lobster: ['"Lobster Two"', 'cursive'],
        outfit: ['"Outfit"', 'sans-serif'],
        protest: ['"Protest Guerrilla"', 'sans-serif'],
      },
            animation: {
        'spin-slow': 'spin 4s linear infinite', // slower spin (default is 1s)
      },
    },
  },
  plugins: [],
}
