/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#141414',
        card: '#171717',
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
