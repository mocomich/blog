import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgba(#1c1c16, 0.6)',
        input: '#d3d3d3',
        background: '#fffff',
        primary: {
          DEFAULT: '#343434',
          text: '#fffff2'
        },
        secondary: {
          DEFAULT: '#F4F4F4',
          text: '#171717'
        },
        tertiary: {
          DEFAULT: '#DBDBDB',
          text: '#171717'
        },
        error: {
          DEFAULT: '#ba1a1a',
          text: '#fffff2'
        }
      },
      borderRadius: {
        lg: `0.5rem`,
        md: `calc(0.5rem - 2px)`,
        sm: 'calc(0.5rem - 4px)'
      },
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans]
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out'
      }
    }
  },
  plugins: []
}
export default config
