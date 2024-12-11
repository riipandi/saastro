import colors from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*!(*.spec|*.test).{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...fontFamily.sans],
        mono: ['JetBrains Mono Variable', ...fontFamily.mono],
      },
      colors: {
        black: '#0A0A0A',
        gray: colors.stone,
        brand: colors.sky,
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-motion')],
}
