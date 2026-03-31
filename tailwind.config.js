/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d1117",
        primary: "#52f9a8",
        "primary-container": "#00d084",
        "on-primary-container": "#003d24",
        secondary: "#bfedcf",
        "secondary-container": "#264f39",
        surface: "#161922", 
        "surface-container-low": "#0f141a",
        "surface-container": "#151a21",
        "surface-container-high": "#1b2028",
        "surface-container-highest": "#20262f",
        "surface-bright": "#262c36",
        "on-surface": "#f1f3fc",
        "on-surface-variant": "#a8abb3",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}