import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#98BB63',
        secondary: '#2B5E2E',
        accent: '#234E70',
        highlight: '#F9F7BE',
      },
    },
  },
  plugins: [],
}
export default config 