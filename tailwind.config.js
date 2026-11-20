/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          800: '#0f172a',
          900: '#0a0f1d',
          950: '#050811',
        },
        gold: {
          100: '#fdf8ee',
          200: '#faecd3',
          300: '#f4daa7',
          400: '#e5be6b',
          500: '#c5a059',
          600: '#b08a46',
          700: '#8e6b33',
        },
      },
    },
  },
  plugins: [],
};
