/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Red: "hsl(0, 100%, 74%)",
        Green: "hsl(154, 59%, 51%)",
        GreenLight: "hsl(154, 59%, 70%)",

        Blue: "hsl(248, 32%, 49%)",

        "Dark-Blue": "hsl(249, 10%, 26%)",
        "Grayish-Blue": "hsl(246, 25%, 77%)",
      },

      boxShadow: {
        'special': '0 7.5px 0px rgba(96, 85, 165, .2)',
        
        'specialGreen': '0 5px 0px hsl(154, 59%, 40%)',
        'specialGreenSmall': '0 3px 0px hsl(154, 59%, 40%)',
      },
    },
  },
  plugins: [],
};
