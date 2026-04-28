import type { Config } from 'tailwindcss'

const config = {
  darkMode: 'class' as const,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
        serif: 'var(--font-serif)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
