/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        default: {
          100: '#f0d9fe',
          200: '#f0b3fd',
          300: '#f08efb',
          400: '#f068fa',
          500: '#f342f9',
          600: '#c235c7',
          700: '#862895',
          800: '#4f1a64',
          900: '#2a0d32',
        },
        black: {
          100: '#f9f9f9',
          200: '#e6e6e6',
          300: '#cccccc',
          400: '#b3b3b3',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#191919',
        },
        success: '#63cc6e',
        info: '#2166a6',
        error: '#f05b5b',
      },
      borderRadius: {
        avatar: '6rem',
        10: '0.625rem',
        20: '1.25rem',
      },
      widths: {
        chart: '108px',
        time: '95px',
        glass: '107px',
      },
      margin: {
        7.5: '1.875rem',
        12.5: '3.125rem',
      },
      padding: {
        7.5: '1.875rem',
        12.5: '3.125rem',
      },
      gap: {
        7.5: '1.875rem',
        12.5: '3.125rem',
        15: '3.75rem',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
