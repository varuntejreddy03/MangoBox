/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F9F4EC',
        'background-alt': '#F2EBE0',
        orange: {
          DEFAULT: '#E8843A',
          hover: '#C4621A',
          light: '#F7E7D6',
        },
        gold: '#C9A84C',
        green: {
          DEFAULT: '#2D4A2F',
          dark: '#1F3520',
          light: '#E4E8E0',
        },
        text: {
          primary: '#1A1208',
          secondary: '#5C5144',
          muted: '#8C8070',
        },
        border: '#D8CCBC',
        card: '#F2EBE0',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Lora"', 'serif'],
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
