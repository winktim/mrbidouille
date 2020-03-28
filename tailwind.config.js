// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const _ = require('lodash')

module.exports = {
  theme: {
    transform: (theme, { negative }) => ({
      'screen': '100vw',
      '-screen': '-100vw',

      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    transitionDurations: {
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      1: '1s',
    },
    transitionProperties: {
      'transform': 'transform',
      'opacity': 'opacity',
      'padding': 'padding',
      'padding-top': 'padding-top',
      'color': 'color',
      'background': 'background',
    },
    colorVariations: {
      5: 5,
      10: 10,
    },
    extend: {
      spacing: {
        '15': '3.75rem',
      },
      height: {
        '76': '19rem',
        '100': '25rem',
      },
      width: {
        '72': '18rem',
        '168': '42rem',
      },
      maxHeight: {
        'screen-20': 'calc(100vh - 5rem)',
      },
      fontFamily: {
        content: ['Raleway', 'sans-serif'],
        heading: ['Staatliches', 'sans-serif'],
      },
      borderRadius: {
        md: '0.3rem',
      },
      inset: {
        full: '100%',
      },
      zIndex: {
        bottom: '-1',
      },
      boxShadow: {
        'lg-side':
          '10px 0 15px -3px rgba(0, 0, 0, 0.1), 4px 0px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {},
  plugins: [
    /**
     * Transform plugin
     */
    function({ addUtilities, addComponents, e, prefix, config }) {
      const utilities = _.map(config('theme.transform'), (value, key) => {
        return {
          [`.${e(`translate-x-${key}`)}`]: {
            transform: `translateX(${value})`,
          },
          [`.${e(`translate-y-${key}`)}`]: {
            transform: `translateY(${value})`,
          },
          [`.${e(`translate-z-${key}`)}`]: {
            transform: `translateZ(${value})`,
          },
        }
      })

      addUtilities(utilities, {
        variants: ['responsive'],
      })
    },
    /**
     * Transition plugin
     */
    function({ addUtilities, addComponents, e, prefix, config }) {
      const utilities = _.map(
        config('theme.transitionProperties'),
        (propertyValue, propertyName) => {
          const out = {}

          _.forEach(
            config('theme.transitionDurations'),
            (durationValue, durationName) => {
              out[`.${e(`transition-${propertyName}`)}-${durationName}`] = {
                transition: `${propertyValue} ${durationValue} ease-in-out`,
              }
            }
          )

          return out
        }
      )

      addUtilities(utilities)
    },
    /**
     * Lighten & Darken utility
     */
    function({ addUtilities, addComponents, e, prefix, config }) {
      const utilities = _.map(
        config('theme.colorVariations'),
        (variationValue, variationName) => {
          return {
            [`.${e(`lighten-${variationName}`)}`]: {
              filter: `brightness(${100 + variationValue}%)`,
            },
            [`.${e(`darken-${variationName}`)}`]: {
              filter: `brightness(${100 - variationValue}%)`,
            },
          }
        }
      )

      addUtilities(utilities, {
        variants: ['active', 'hover'],
      })
    },
    /**
     * Flip utility
     */
    function({ addUtilities, addComponents, e, prefix, config }) {
      const utilities = [
        {
          [`.${e(`flip-x`)}`]: {
            transform: `scaleX(-1)`,
          },
          [`.${e(`flip-y`)}`]: {
            transform: `scaleY(-1)`,
          },
        },
      ]

      addUtilities(utilities, {
        variants: ['responsive'],
      })
    },
  ],
}
