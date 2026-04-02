/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        surface: 'var(--color-surface)',
        'surface-container-low': 'var(--color-surface-container-low)',
        'surface-container-lowest': 'var(--color-surface-container-lowest)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        sm: '0 4px 20px rgba(0, 0, 0, 0.05)',
        lg: '0 12px 40px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
