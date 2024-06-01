/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['responsive'],
    },
  },
  variants: {
    scrollBehavior: ['responsive'],
  },
  plugins: [],
}