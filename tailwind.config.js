/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      colors:{
        'custom-red':'#F33535',
        'light-gray':'#F6F6F6',
        'custom-cyan':'#E0EFFB'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}