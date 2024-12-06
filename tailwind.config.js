/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
         '1140':'1140px'
      },
      colors:{
        'blue-light':'#4880FF',
        'black':'#202224',
        'white':'#FFFFFF',
      },
    },
  },
  plugins: [],
}