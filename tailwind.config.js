const defaultTheme = require('tailwindcss/defaultTheme');

const boxShadow = require('./src/assets/styles/shadows');
const colors = require('./src/assets/styles/colors');
const opacity = require('./src/assets/styles/opacities');

module.exports = {
  theme: {
    extend: {
      boxShadow,
      colors,
      opacity
    },
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {},
  plugins: []
};