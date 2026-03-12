/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
          extend: {
                  colors: {
                            rose: '#CB9F5B',
                            'rose-dark': '#B8893F',
                            burgundy: '#ED728B',
                            dark: '#2C2D2E',
                            cream: '#FCF7EC',
                            gold: '#CB9F5B',
                            green: '#166534',
                            'warm-white': '#FCF7EC',
                            'rosa-empaque': '#F7C7C7',
                            'rosa-blush': '#FFF1F2',
                            'amarillo-miel': '#FEF9C3',
                            'verde-finca': '#DCFCE7',
                            'beige-natural': '#FAF9F5',
                  },
                  fontFamily: {
                            display: ['"Baskervville"', 'serif'],
                            body: ['"Jost"', 'sans-serif'],
                  },
          },
    },
    plugins: [],
};
