/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sansSerif: ['var(--font-blinkMac)']
      },
      fontSize: {
        base: ['16.3px', '24px'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '.035em',
        wide: '.040em',
        wider: '.05em',
        widest: '.1em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'neonYellow': '#fbff12;',
      },
      backgroundColor: {
        'nearBlack': '#0b0b0b'
      },
      spacing: {
        homeBoxPosition: 'max(20px, 2.5vmin)',

        pageBoxTop: 'max(20px, 13vmin)',
        pageBoxRight: 'max(20px, 12vmin)',
        pageBoxLeft: 'max(20px, 5vmin)',
        pageBoxBottom: 'max(20px, 8vmin)',
        pagePositionY: 'max(20px, 15vmin)',
        pagePositionX: 'max(20px, 14vmin)',
        workRowsLeft: 'max(20px, 8vmin)',
        workRowsRight: 'max(20px, 8vmin)',
        categoryPosition: 'max(20px, 13.5vmin)',

      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out linear',
      }, 
      scale: {
        '102': '1.02',
      },
      width: {
        mobileWidth: '93vw',
      },
      screens: {
        'xs': '450px'
      }
    },
  },
  plugins: [],
}
