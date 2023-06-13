/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'nearBlack': '#0b0b0b'
      },
      spacing: {
        boxPosition: 'max(20px, 2.5vmin)',
        pageBoxTop: 'max(20px, 13vmin)',
        pageBoxRight: 'max(20px, 13vmin)',
        pageBoxLeft: 'max(20px, 5vmin)',
        pageBoxBottom: 'max(20px, 8vmin)',
        pagePosition: 'max(20px, 5vmin)',
        categoryPosition: 'max(20px, 13.5vmin)'
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
      
    },
  },
  plugins: [],
}
