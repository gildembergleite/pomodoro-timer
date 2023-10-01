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
      colors: {
        green: {
          default: 'rgba(var(--green), <alpha-value>)',
          dark: 'rgba(var(--green-dark), <alpha-value>)',
          light: 'rgba(var(--green-light), <alpha-value>)',
        },
        red: {
          default: 'rgba(var(--red), <alpha-value>)',
          dark: 'rgba(var(--red-dark), <alpha-value>)',
        },
        gray: {
          background: 'rgba(var(--gray-background), <alpha-value>)',
          elements: 'rgba(var(--gray-elements), <alpha-value>)',
          count: 'rgba(var(--gray-count), <alpha-value>)',
          divider: 'rgba(var(--gray-divider), <alpha-value>)',
          placeholder: 'rgba(var(--gray-placeholder), <alpha-value>)',
          label: 'rgba(var(--gray-label), <alpha-value>)',
          text: 'rgba(var(--gray-text), <alpha-value>)',
          title: 'rgba(var(--gray-title), <alpha-value>)',
        },
      },
    },
  },
}
