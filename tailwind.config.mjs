/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:   '#000814',
        deep:  '#001d3d',
        navy:  '#003566',
        gold:  '#ffc300',
        spark: '#ffd60a',
        cream: '#e8dfc8',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'giant': 'clamp(5rem, 14vw, 15rem)',
        'display': 'clamp(3rem, 6vw, 5.5rem)',
      },
    },
  },
  plugins: [],
};
