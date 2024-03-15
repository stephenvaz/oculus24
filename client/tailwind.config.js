/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#10002B',
        'secondary-dark': '#240046',
        'primary-purple': '#7B2CBF',
        'secondary-purple': '#C77DFF',
        'black': '#000000',
        'white': '#FFFFFF',
        'gray': '#E5E5E5',
        'red': '#FF0000',
        'dark-gray': '#BDBDBD',
       },
       screens: {
        'slm': {max: '880px', min: '768px'},
        'x2s': {max: '639px', min: '450px'},
        'x1s': {max: '449px', min: '300px'},
        'sw': {max: '767px', min: '0px'},
        'max-xs': {max: '375px'},
        'max-sm': {max: '639px'},
        'max-md': {max: '850px', min: '0px'},
       }
    },
  },
  plugins: [],
}