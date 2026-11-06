import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#0B3B2E',
          800: '#0E4B3B',
          700: '#14604A',
          600: '#1A7A5F',
        },
        saffron: {
          400: '#FBB03B',
          500: '#F5A524',
          600: '#D98A12',
        },
        leaf: {
          400: '#48D487',
          500: '#2FBF71',
          600: '#249B5B',
        },
        tomato: {
          400: '#F06A54',
          500: '#E8553D',
          600: '#C8412B',
        },
        cream: {
          50: '#FFF7E8',
          100: '#FDF2DC',
          200: '#F6E7CA',
        },
        sage: {
          50: '#F2F8F4',
          100: '#E6F2EA',
          200: '#CCE5D5',
        },
        ink: {
          900: '#14201B',
          700: '#384841',
          600: '#5B6B63',
          400: '#8B9E96',
        }
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '10px',
        'card': '18px',
        'panel': '28px',
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
        'pill': '9999px',
      },
      boxShadow: {
        'card': '0 4px 24px -2px rgba(11, 59, 46, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
        'card-hover': '0 20px 40px -12px rgba(11, 59, 46, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.04)',
        'glass': '0 12px 36px -8px rgba(11, 59, 46, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
        'glass-dark': '0 20px 50px -10px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
        'glow-saffron': '0 0 35px -5px rgba(245, 165, 36, 0.45)',
        'glow-leaf': '0 0 35px -5px rgba(47, 191, 113, 0.4)',
        'glow-apple': '0 10px 40px -10px rgba(245, 165, 36, 0.3)',
        'modal': '0 30px 70px -15px rgba(11, 59, 46, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
} satisfies Config
