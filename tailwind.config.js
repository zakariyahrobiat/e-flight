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
        "secondary-500":"#15ABFFFF",
        "neutral-150":"#F8F9FAFF",
        "primary-500":"#6D31EDFF",
        "primary-600":"#5113D7FF",
        "primary-700":"#3F0EA6FF",
        " neutral-900":"#171A1FFF",
        "neutral-400":"#BDC1CAFF",
        "neutral-500":"#9095A1FF",
        "tertiary2-750":"#7D6600FF",
        "secondary-100":"#F0F9FFFF"
      }
    },
  },
  plugins: [],
}

