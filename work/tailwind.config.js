/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Moderustic:
          ['matemasie',"sans-serif"]
        
      }
    },
    container:{
      padding:{
        md:"4rem"
      }
    }
  },
  plugins: [],
}

