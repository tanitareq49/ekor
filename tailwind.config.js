/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 30px 0px rgba(41, 52, 60, 0.08)'
      },
      colors: {
        'green-800': '#1D7460',
        'green-600': '#22826C',
        'green-200': '#519888',
        'green-100': '#E8FAF6',
        'orange': '#F16520',
        'orange-100': '#FEEFE8',
        'black': '#2A3741',
        'white': '#FFFFFF',
        'grey-200': '#F4F5F6',
        'grey-400': '#ECECEC'
      },
      screens: {
        'xs': '450px',
        
        'sm': '640px',

        'md': '800px',

        'lg': '1024px',

        'xl': '1100px',

        '2xl': '1280px',

        '3xl': '1344px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

