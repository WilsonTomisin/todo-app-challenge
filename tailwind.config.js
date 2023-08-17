/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation:{
        'slow-bounce': ' bounce 3s linear infinite'
      },
      screens:{
        'mobile':'315px',
        'tablet':'765px'
      }
    },
  },
  plugins: [],
}

