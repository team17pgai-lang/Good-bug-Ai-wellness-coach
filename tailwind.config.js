/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        offwhite: 'var(--off-white)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        disabled: 'var(--text-disabled)',
        borderLight: 'var(--border-light)',
        status: {
          excellent: 'var(--status-excellent)',
          good: 'var(--status-good)',
          fair: 'var(--status-fair)',
          poor: 'var(--status-poor)',
          neutral: 'var(--status-neutral)',
        },
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      fontFamily: {
        sans: ['var(--font-family, "Inter")', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

