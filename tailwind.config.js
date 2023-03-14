/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontSize: {
        default: '16px',
        small: '14px',
        mini: '12px',
        h1: '48px',
        h2: '32px',
        h3: '24px',
        h4: '20px',
        h5: '18px',
        h6: '16px',
        info: '16px',
        buttonSmall: '13px',
        buttonNormal: '16px',
        buttonLarge: '18px',
      },
      colors: {
        'clr-primary': '#0D6EFD',
        'clr-secondary': '#1C1C1C',
        'clr-green': '#00B517',
        'clr-orange': '#FF9017',
        'clr-red': '#FA3434',
      },
    },
  },
  plugins: [],
};
