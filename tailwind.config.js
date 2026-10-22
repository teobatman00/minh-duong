/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Root-level UI (ButtonBookmark, ButtonReaction, ViewCounter, BlogReactions)
    // also uses tw-* classes; without these globs their utilities are never emitted.
    "./components/**/*.{js,jsx,ts,tsx}",
    "./customizations/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.mdx",
    "./blog/**/*.mdx"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'var(--brand-50)',
          100: 'var(--brand-100)',
          200: 'var(--brand-200)',
          300: 'var(--brand-300)',
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          700: 'var(--brand-700)',
          800: 'var(--brand-800)',
          900: 'var(--brand-900)',
          950: 'var(--brand-950)',
          DEFAULT: 'var(--brand-500)',
        },
        surface: {
          page: 'var(--surface-page)',
          elevated: 'var(--surface-elevated)',
          muted: 'var(--surface-muted)',
          sunken: 'var(--surface-sunken)',
          overlay: 'var(--surface-overlay)',
        },
        ink: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          inverse: 'var(--text-inverse)',
          link: 'var(--text-link)',
        },
        line: {
          subtle: 'var(--border-subtle)',
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
        },
        primary: {
          DEFAULT: 'var(--ifm-color-primary)',
          dark: 'var(--ifm-color-primary-dark)',
          darker: 'var(--ifm-color-primary-darker)',
          darkest: 'var(--ifm-color-primary-darkest)',
          light: 'var(--ifm-color-primary-light)',
          lighter: 'var(--ifm-color-primary-lighter)',
          lightest: 'var(--ifm-color-primary-lightest)',
        },
        accent: {
          DEFAULT: 'var(--accent-500)',
          50: 'var(--accent-50)',
          100: 'var(--accent-100)',
          200: 'var(--accent-200)',
          300: 'var(--accent-300)',
          400: 'var(--accent-400)',
          500: 'var(--accent-500)',
          600: 'var(--accent-600)',
          700: 'var(--accent-700)',
          800: 'var(--accent-800)',
          900: 'var(--accent-900)',
          dark: 'var(--accent-dark)',
          light: 'var(--accent-light)',
          contrast: 'var(--accent-contrast)',
        },
        /* Legacy alias used by existing classes */
        'surface-muted': 'var(--surface-muted)',
      },
      textColor: {
        /*
         * NOTE: no `primary` here on purpose — it would shadow `colors.primary`
         * (brand) so `tw-text-primary` / `hover:tw-text-primary` became the
         * plain body color. Use `tw-text-ink-primary` for body text.
         */
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        inverse: 'var(--text-inverse)',
        link: 'var(--text-link)',
      },
      borderColor: {
        subtle: 'var(--border-subtle)',
        DEFAULT: 'var(--border-default)',
        strong: 'var(--border-strong)',
      },
      backgroundColor: {
        page: 'var(--surface-page)',
        elevated: 'var(--surface-elevated)',
        muted: 'var(--surface-muted)',
        sunken: 'var(--surface-sunken)',
      },
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
