const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: 'var(--vz-primary)',
        pink: {
          50: 'var(--vz-pink-50)',
          100: 'var(--vz-pink-100)',
          200: 'var(--vz-pink-200)',
          300: 'var(--vz-pink-300)',
          400: 'var(--vz-pink-400)',
          500: 'var(--vz-pink-500)',
          600: 'var(--vz-pink-600)',
          700: 'var(--vz-pink-700)',
          800: 'var(--vz-pink-800)',
          900: 'var(--vz-pink-900)',
        },
        gray: {
          ...colors.gray,
          '750': 'var(--vz-gray-750)',
          '850': 'var(--vz-gray-850)',
          '950': 'var(--vz-gray-950)'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
		require('@tailwindcss/forms'),
	],
}
