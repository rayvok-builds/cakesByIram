/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        plum: '#4A1942',
        berry: '#C24868',
        gold: '#C79A4B',
        blush: '#F3DCE0',
        ivory: '#FBF5EC',
        paper: '#FFFDF9',
        ink: '#2B1B22',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      keyframes: {
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeVerticalUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        marqueeVerticalDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        marqueeScroll: 'marqueeScroll 24s linear infinite',
        marqueeVerticalUp: 'marqueeVerticalUp 28s linear infinite',
        marqueeVerticalDown: 'marqueeVerticalDown 32s linear infinite',
      },
    },
  },
  plugins: [],
};
