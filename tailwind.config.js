/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coral principal
        coral: {
          50: '#fff5f4',
          100: '#ffe8e6',
          500: '#ff7e70',
          600: '#ff6b5a',
          700: '#e55a4c',
          900: '#b8453a',
        },
        // Mint suave
        mint: {
          50: '#eafffd',
          100: '#d4fffe',
          200: '#eafffd',
          300: '#b8fffc',
          500: '#4dd0e1',
        },
        // Vino profundo
        wine: {
          50: '#fdf2f2',
          100: '#fce7e7',
          500: '#6f181e',
          600: '#5c1419',
          700: '#4a1014',
          900: '#6f181e',
        },
        // Dorado elegante
        gold: {
          50: '#fefbf0',
          100: '#fef7e0',
          500: '#e4b028',
          600: '#d4a024',
          700: '#b8891f',
        },
        // Azul tech
        tech: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        // Negro puro
        black: '#000000',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}