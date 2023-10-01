/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      system: {
        green: {
          default: 'var(--green)',
          dark: 'var(--green-dark)',
          light: 'var(--green-light)',
        },
        red: {
          default: 'var(--red)',
          dark: 'var(--red-dark)',
        },
        gray: {
          background: 'var(--gray-background)',
          elements: 'var(--gray-elements)',
          divider: 'var(--gray-divider)',
          placeholder: 'var(--gray-placeholder)',
          label: 'var(--gray-label)',
          text: 'var(--gray-text)',
          title: 'var(--gray-title)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
