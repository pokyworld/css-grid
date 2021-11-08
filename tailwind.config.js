const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: [
          'Montserrat Light',
          'Nunito',
          'sans-serif'
        ]
      },
      fontSize: {
        huge: ['6rem', { lineHeight: '4.5rem' }]
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          light: '#E2E2D5',
          dark: '#888883'
        },
        coolGray: colors.coolGray,
        emerald: colors.emerald,
        amber: colors.amber,
        rose: colors.rose,
        indigo: colors.indigo
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
