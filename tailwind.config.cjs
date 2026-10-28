module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Fútbol-themed colors
        pitch: {
          green: "#2d5016",    // Césped
          dark: "#1a2e0e",     // Verde oscuro
          light: "#3f7a1f",    // Verde claro
        },
        football: {
          gold: "#fbbf24",     // Dorado brillante
          silver: "#9ca3af",   // Plata
          bronze: "#cd7f32",   // Bronce
          black: "#000000",    // Negro fútbol
          white: "#ffffff",    // Blanco estadio
        },
        // Keep default colors for consistency
        primary: "#4f46e5",
        secondary: "#6b7280",
        accent: "#f59e0b",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', 'Georgia', 'serif'],
      },
      spacing: {
        // Usar multiples de 4 para consistencia
        '18': '4.5rem',
        '24': '6rem',
        '36': '9rem',
      },
      borderRadius: {
        // Bordes específicos del diseño
        'pill': '9999px',
        'card': '1rem',
      },
      boxShadow: {
        // Sombras del tipo 'pelota de fútbol'
        'football': '0 4px 14px 0 rgb(0 0 0 / 0.15), 0 2px 6px 0 rgb(0 0 0 / 0.1)',
        'player': '0 8px 25px 0 rgb(0 0 0 / 0.2), 0 4px 10px 0 rgb(0 0 0 / 0.15)',
        'gold': '0 4px 20px 0 rgb(251 191 36 / 0.4), 0 2px 8px 0 rgb(251 191 36 / 0.3)',
      },
    },
  },
  plugins: [],
};