/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // /**/ dossier dans les dossier
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  // Ajoutez ceci pour ignorer les fichiers spécifiques
  watchOptions: {
    ignored: ["C:/DumpStack.log.tmp"],
  },
};
