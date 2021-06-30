const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#d32f2f',
          lightest: '#ff6659',
          darkest: '#9a0007'
        },
        secondary: {
          base: '#f57c00',
          lightest: '#ffad42',
          darkest: '#bb4d00'
        },
        success: {
          base: '#4eca7a',
          lightest: '#96cf59',
          darkest: '#369a5d'
        },
        warning: {
          base: '#ffa83f',
          lightest: '#ffcc63',
          darkest: '#ff895f'
        },
        danger: {
          base: '#df484a',
          lightest: '#f27075',
          darkest: '#984848'
        },
        light: {
          base: '#f7f7f7',
          lightest: '#fcfcfc',
          darkest: '#f0f0f0'
        },
        dark: {
          base: '#7e7a7a',
          lightest: '#a5a2a2',
          darkest: '#292929'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        shake: 'shake 1s both'
      },
      keyframes: {
        shake: {
          '10%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(-10px, 0, 0)' },
          '20%, 40%, 60%, 80%': { transform: 'translate3d(10px, 0, 0)' }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
