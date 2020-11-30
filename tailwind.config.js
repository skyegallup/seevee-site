const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '120': '30rem'
      }
    },
  },
  variants: {
    extend: {
      ringWidth: 'invalid',
      ringColor: 'invalid'
    },
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'invalid',
    'disabled',
  ],
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('invalid', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`invalid${separator}${className}`)}:invalid`
        })
      })
    })
  ]
}
