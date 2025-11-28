/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      'bumblebee',
      {
        dracula: {
          ...require('daisyui/src/theming/themes')['dracula'],
          primary: '#f9d72f', // from bumblebee
          secondary: '#e0a82e', // from bumblebee
          accent: '#df7e07', // from bumblebee
          'base-200': '#2a2e37', // Lighter than base-100 for navbar
          'base-300': '#20232a' // For borders and dividers
        }
      }
    ]
    // themes: ['bumblebee', 'dark']
  }
};
