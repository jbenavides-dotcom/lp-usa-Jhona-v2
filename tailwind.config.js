/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: '#E11D48',
        'rose-dark': '#BE123C',
        dark: '#1a1a1a',
        cream: '#FAFAF9',
        gold: '#92764A',
        green: '#166534',
        'warm-white': '#FAF7F2',
      },
      fontFamily: {
        display: ['"Tenor Sans"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
