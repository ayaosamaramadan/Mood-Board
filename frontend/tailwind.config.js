  // tailwind.config.js
  module.exports = {
   purge: [],
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
      colors: {
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
        },
        lavender: {
          100: '#e8e0f0',
          200: '#d4c4e3',
          300: '#b8a4d0',
        },
      },
      fontFamily: {
        cute: ['Quicksand', 'Comic Sans MS', 'cursive'],
      },
      boxShadow: {
        'cute': '0 4px 20px -2px rgba(236, 72, 153, 0.3)',
        'cute-lg': '0 10px 40px -10px rgba(168, 85, 247, 0.4)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-soft': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
          },
    },
    plugins: [],
  }