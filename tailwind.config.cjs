/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
<<<<<<< HEAD
    fontSize:{
=======
    fontSize: {
>>>>>>> c88547d27a73cebc86a9a83f2f4b60d971890dfb
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
<<<<<<< HEAD
      '2xl': 32
    },
    colors:{
      transparent: 'transparent',
      black: '#000',
      white: 'fff',
      gray:{
=======
      '2xl': 32,
    },

    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#FFF',

      gray: {
>>>>>>> c88547d27a73cebc86a9a83f2f4b60d971890dfb
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },
<<<<<<< HEAD
      cyan:{
      500: '#81d8f7',
      300: '#9be1fb',
=======

      cyan: {
        500: '#81d8f7',
        300: '#9BE1FB'
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
>>>>>>> c88547d27a73cebc86a9a83f2f4b60d971890dfb
      }
    },
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
