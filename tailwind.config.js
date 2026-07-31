/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas:  '#faf8f3',
        surface: '#ffffff',
        sand:    '#f3efe7',
        ink: {
          DEFAULT: '#0f1311',
          900: '#16191a',
          800: '#1f2422',
          700: '#2a302d',
          600: '#3b423f',
          500: '#525953',
          400: '#6b716a',
          300: '#8a8f87',
          200: '#b3b6ad',
          100: '#d8d8d0',
           50: '#ecebe2',
        },
        accent: {
          DEFAULT: '#0f5d4a',
          dark:    '#0a4538',
          deep:    '#073226',
          muted:   '#3a8473',
          soft:    '#d9e7e2',
        },
        gold: {
          DEFAULT: '#a98532',
          muted:   '#c8a558',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        serif:   ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      opacity: {
        '4':  '0.04',
        '6':  '0.06',
        '8':  '0.08',
        '12': '0.12',
        '15': '0.15',
        '18': '0.18',
        '22': '0.22',
      },
      borderOpacity: {
        '4':  '0.04',
        '6':  '0.06',
        '8':  '0.08',
      },
      backgroundOpacity: {
        '4': '0.04',
        '6': '0.06',
        '8': '0.08',
      },
      divideOpacity: {
        '8': '0.08',
      },
      textOpacity: {
        '8':  '0.08',
        '12': '0.12',
      },
      animation: {
        'marquee':    'marquee 40s linear infinite',
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'float-y':    'floatY 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'shimmer':    'shimmer 2.6s linear infinite',
        'rise':       'rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'spin-slow':  'spin 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
