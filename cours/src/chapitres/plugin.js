/**npm i -D @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio @tailwindcss/container-queries */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};

// Personnaliser
// Pour personnaliser Tailwind CSS, vous pouvez modifier le fichier tailwind.config.js à la racine de votre projet. Ce fichier contient un objet de configuration qui vous permet de définir des thèmes, des variantes, des plugins et d'autres options pour personnaliser votre build de Tailwind CSS.

/**plugins: [
  require("@tailwindcss/forms")({
    strategy: 'base', // génère uniquement des styles globaux
  }),
  // ou
  require("@tailwindcss/forms")({
    strategy: 'class', // génère uniquement des classes
  }),
] */