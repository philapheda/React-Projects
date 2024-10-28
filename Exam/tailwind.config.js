/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        ab : "#32a89e"
      },
      fontSize:{
        base: "16px"
      },
      screens:{
        sm: "450px",
      }
    },
  },
  plugins: [],
}

