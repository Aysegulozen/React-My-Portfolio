/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'first-color': '#014737',
        'second-color': '#046C4E ',       
      },
    },
  },
  plugins: [
    'flowbite/plugin'
  ],
}

