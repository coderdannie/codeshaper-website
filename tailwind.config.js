/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gray: '#707070',
        lightGray: '#F2F4F8',
        darkBlue: '#0f0d1d',
        lightBlue: '#3c72fc',
      },
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
    },
  },
  plugins: [],
};
