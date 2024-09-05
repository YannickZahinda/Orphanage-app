/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'violet': '#8F36FF',
        'rose' : '#B61F24',
        'orange': '#FF7900'
      },
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'serif'],
      },
      fontSize: {
        'xxs': '0.625rem',
        'mega': '4rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      screens: {
        '3xl': '1600px', // Adds a new `3xl:` screen variant
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.10)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}