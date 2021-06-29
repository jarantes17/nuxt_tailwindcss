module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat'],
        sans: ['Oxygen'],
        subheading: ['Muli'],
      },
      animation: {
        shake: 'shake 1s both',
      },
      keyframes: {
        shake: {
          '10%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(-10px, 0, 0)' },
          '20%, 40%, 60%, 80%': { transform: 'translate3d(10px, 0, 0)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
