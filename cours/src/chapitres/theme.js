// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // Définir les points d'arrêt pour le responsive design
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // Personnaliser la palette de couleurs
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      // Plus de couleurs...
    },
    // Configurer les polices de caractères
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    // Étendre le thème avec des valeurs personnalisées
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      // Autres extensions...
    },
  },
}