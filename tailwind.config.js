/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0D1117', // Elsődleges sötét háttér [cite: 139]
        emerald: '#0A3622',  // Nagyméretű statikus felületek [cite: 138]
        cybermint: '#00D084', // Siker / Elsődleges Akció [cite: 142]
        danger: '#EF4444',    // Destruktív akció [cite: 143]
        warning: '#F59E0B',   // Figyelmeztetés [cite: 145]
        surface: {
          DEFAULT: '#161922', // Kártya felület, világosabb az obsidiannál [cite: 70, 133]
          hover: '#1C202B',   // Hover állapotokhoz
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A szoftver igáslova [cite: 151]
        display: ['Outfit', 'sans-serif'], // Nagy címsorokhoz [cite: 150]
      },
      spacing: {
        // A 4/8 pixeles rácsrendszer alapjai 
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      boxShadow: {
        none: 'none', // Zéró Alapértelmezett Árnyék [cite: 75]
      }
    },
  },
  plugins: [],
}