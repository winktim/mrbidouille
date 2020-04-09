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
    rotation: {
      'none': '0deg',
      '-4': '-4deg',
      '-8': '-8deg',
      '4': '4deg',
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
    },
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
      none: 0,
      5: 5,
      10: 10,
    },
    extend: {
      spacing: {
        '15': '3.75rem',
      },
      height: {
        '14': '3.5rem',
        '50': '12.5rem',
        '76': '19rem',
        '100': '25rem',
      },
      padding: {
        '14': '3.5rem',
      },
      margin: {
        '-8': '-2rem',
      },
      width: {
        '1/2-fake': '45%',
        '72': '18rem',
        '150': '37.5rem',
        '300': '75rem',
      },
      maxHeight: {
        'screen-20': 'calc(100vh - 5rem)',
      },
      fontFamily: {
        content: ['Sansation', 'sans-serif'],
        heading: ['Maven Pro', 'sans-serif'],
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
      colors: {
        gray: {
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#111111',
        },
        bid: {
          'magenta': '#B62C6D',
          'dark-magenta': '#602658',
          'pink': '#A748A6',
          'bright-pink': '#be58bd',
          'violet': '#A661C9',
        },
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
     * Rotate plugin
     */
    function({ addUtilities, addComponents, e, prefix, config }) {
      const utilities = _.map(config('theme.rotation'), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`,
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
