/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#FAF9F6',
        'bg-light': '#F0EDE5',
        'primary': '#7C9473',
        'accent': '#CD853F',
        'accent-light': '#D4A574',
        'text-main': '#2D3436',
        'text-secondary': '#636E72',
        'olive-dark': '#5A6B52',
        'olive-light': '#A8B5A0',
        'gold': '#D4A574',
        'gold-dark': '#B8860B',
      },
    },
  },
  plugins: [],
}

