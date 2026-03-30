/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFDF7',
        'background-alt': '#F5F0E8',
        orange: {
          DEFAULT: '#E8651A',
          hover: '#CF5515',
          light: '#FEF3E8',
        },
        gold: '#F5A623',
        green: {
          DEFAULT: '#2D6A4F',
          dark: '#1A4733',
          light: '#EAF4EE',
        },
        text: {
          primary: '#1C1917',
          secondary: '#57534E',
          muted: '#A8A29E',
        },
        border: '#E7E2D9',
        card: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        card: '20px',
        pill: '999px',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
