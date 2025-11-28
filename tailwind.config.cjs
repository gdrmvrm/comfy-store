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
          accent: '#df7e07' // from bumblebee
        }
      }
    ]
  }
};
