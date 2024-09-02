/**
 * Copyright©. All rights reserved.
 * Licence text to come
 */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "../../../../../../vendor/viraxpress/**/*.phtml",
    "../../../../../../vendor/viraxpress/**/*.xml",
    "../../../../../../vendor/viraxpress/**/core-js/core.min.js",
    "../../../../../media/cms/page/*.html",
    "../../../../../media/cms/block/*.html"
  ],
  future: {
    hoverOnlyWhenSupported: true, // enable hover only when supported
  },
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"],
      regular: ["ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"]
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        xxl: "1440px"
      },
      fontWeight: {
        normal: '400',
      },
      colors: {
        primary: "#CA244D",
        required: "#e02b27",
        error: "#e02b27",
        ruby: {
          50: '#FFFCFD96',
          100: '#FFFCFD',
          200: '#FFF7F8',
          300: '#FEEAED',
          400: '#FFDCE1',
          500: '#FFCED6',  // base color
          600: '#F8BFC8',
          700: '#EFACB8',
          800: '#E592A3',
          900: '#E54666',
          1000: '#DC3B5D',
          1100: '#CA244D',
          'HC': '#64172B'
        }
      },
      transitionProperty: {
        height: "height",
      },
      gridColumn: {
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-7": "span 7 / span 7",
        "span-5": "span 5 / span 5",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      fontSize: {
        md: "15px",
        inherit: "inherit",
      },
      zIndex: {
        9: "9",
        99: "99",
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        999: "999",
        9999: "9999",
      },
      aspectRatio: {
        "2/3": "2 / 3",
        video: "16 / 9",
      },
      container: {
        center: true, // This centers the container by default
        padding: {
          DEFAULT: '1.5rem', // Default padding for all screens
        },
      },
       height: {
        'calc-100-minus-124': 'calc(100% - 124px)'
      },
      width: {
        'calc-100-minus-50': 'calc(100% - 50px)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        }
      })
    }
  ],
}