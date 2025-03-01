/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#4F8CFF',
          500: '#3B82F6',
          600: '#2563EB',
        },
        purple: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'neon-blue': '0 0 5px theme("colors.blue.400"), 0 0 20px theme("colors.blue.500")',
        'neon-purple': '0 0 5px theme("colors.purple.400"), 0 0 20px theme("colors.purple.500")',
      },
    },
  },
  plugins: [],
};