/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 2px 5px #171a1f, 0px 0px 2px #171a1f',
      },
      colors:{
        "secondary-500":"#15ABFFFF"
      }
    },
  },
  plugins: [],
}

