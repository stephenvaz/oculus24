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
        'indigo': '#3F51B5',
        
       //  rest of the colors
       },
    },
  },
  plugins: [],
}