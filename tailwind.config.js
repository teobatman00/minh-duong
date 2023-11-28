/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./docs/**/*.mdx",
    "./blog/**/*.mdx"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      keyframes: {
        'dissolve-in': {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        },
        'dissolve-in-out': {
          '0%': {
            opacity: 0
          },
          '25%': {
            opacity: 1
          },
          '50%': {
            opacity: 0
          },
          '75%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        }
      },
      animation: {
        'dissolve-in': 'dissolve-in 6s ease-in-out infinite',
        'dissolve-in-out': 'dissolve-in-out 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

