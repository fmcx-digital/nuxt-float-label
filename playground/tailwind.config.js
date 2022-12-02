const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
    'app.vue',
    'error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF'
        }
      },
      screens: {
        'mobile-max': { max: '767px' },
        'md-max': { max: '1023px' },
        'm-nav-max': { max: '1023px' },
        'tablet-max': { max: '1151px' },
        'desktop-min': { min: '1152px' },
        'desktop-max': { max: '1279px' },
        'md-desktop-max': { max: '1439px' }
      }
    },
    fontFamily: {
      main: ['Poppins', 'sans-serif']
    }
  },
  plugins: [typography]
};
