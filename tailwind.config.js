/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {},
    },
    fontFamily: {
      gothic: ['"Paperlogy"', 'ui-sans-serif', 'system-ui'],
      myungjo: ['"Chosunilbo Myungjo"', 'ui-serif', 'system-ui'],
      cute: ['"Omyu Pretty"', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [require('tailwindcss-animate')],
};
