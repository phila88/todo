/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: '#227C9D',
      mint: { light: '#19ce9b', DEFAULT: '#00C990', dark: '#00b481' },
      white: '#FEF9EF',
    },
    extend: {
      fontFamily: {
        cursive: "'Nova Script', cursive",
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
