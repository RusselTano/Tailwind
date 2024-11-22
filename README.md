# Créer un Design System en SCSS inspiré de Tailwind CSS

## Introduction
Vous pouvez créer un design system personnalisé en **SCSS** en vous inspirant du fonctionnement et de la configuration de **Tailwind CSS**. Cela vous permettra de bénéficier de la flexibilité de SCSS tout en adoptant une approche basée sur les classes utilitaires comme Tailwind.

---

## Étapes pour Créer un Design System en SCSS

### 1. Analyser la configuration de Tailwind CSS
Pour commencer, récupérez la configuration par défaut de Tailwind CSS avec la commande suivante :

```bash
npx tailwindcss init --full
```

Cela générera un fichier `tailwind.config.js` contenant toutes les valeurs par défaut (couleurs, espacements, typographies, etc.).

---

### 2. Traduire les valeurs en variables SCSS
Adaptez les valeurs de la configuration de Tailwind en **variables SCSS**.

#### Exemple de Variables SCSS
```scss
// Variables SCSS
$colors: (
  primary: #1D4ED8, // Blue-600
  secondary: #9333EA, // Purple-600
  neutral: #F3F4F6, // Gray-100
);

$spacing: (
  0: 0px,
  1: 0.25rem, // 4px
  2: 0.5rem,  // 8px
  4: 1rem,    // 16px
  8: 2rem,    // 32px
);

$font-sizes: (
  sm: 0.875rem, // 14px
  base: 1rem,   // 16px
  lg: 1.125rem, // 18px
);
```

---

### 3. Créer des Mixins pour les Classes Utilitaires
Reproduisez des classes utilitaires similaires à Tailwind en utilisant des **mixins SCSS** et des **maps**.

#### Exemple de Mixins SCSS
```scss
// Utiliser des mixins pour espacement
@mixin margin($size) {
  margin: map-get($spacing, $size);
}

@mixin padding($size) {
  padding: map-get($spacing, $size);
}

// Exemple d'utilisation
.m-4 {
  @include margin(4);
}

.p-2 {
  @include padding(2);
}
```

---

### 4. Ajouter des Styles Réactifs (Media Queries)
Reprenez les points de rupture (`breakpoints`) de Tailwind et implémentez-les en SCSS.

#### Exemple de Points de Rupture
```scss
// Points de rupture
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
);

@mixin responsive($breakpoint) {
  @media (min-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}

// Exemple d'utilisation
.text-lg {
  font-size: 1rem;

  @include responsive(md) {
    font-size: 1.25rem; // 20px
  }
}
```

---

### 5. Créer des Classes Utilitaires Dynamiques
Utilisez SCSS pour générer automatiquement des classes basées sur vos variables.

#### Exemple de Génération Automatique
```scss
// Génération des classes d'espacement
@each $key, $value in $spacing {
  .m-#{$key} {
    margin: $value;
  }

  .p-#{$key} {
    padding: $value;
  }
}
```

---

### 6. Importer et Structurer les Fichiers SCSS
Organisez vos fichiers SCSS pour améliorer la lisibilité et la maintenabilité.

#### Structure des Fichiers
```plaintext
scss/
├── _variables.scss    // Variables (couleurs, tailles, espacements)
├── _mixins.scss       // Mixins utilitaires
├── _base.scss         // Styles de base (reset, typographie)
├── _components.scss   // Composants spécifiques (boutons, cartes, etc.)
├── _utilities.scss    // Classes utilitaires générées
└── main.scss          // Importer tout ici
```

#### Exemple d'importation dans `main.scss`
```scss
@import 'variables';
@import 'mixins';
@import 'base';
@import 'components';
@import 'utilities';
```

---

### 7. Ajouter un Système de Couleurs Dynamiques
Générez automatiquement des classes utilitaires pour les couleurs, comme `bg-primary` ou `text-secondary`.

#### Exemple de Génération de Couleurs
```scss
// Génération des classes pour les couleurs
@each $name, $value in map-get($colors) {
  .bg-#{$name} {
    background-color: $value;
  }

  .text-#{$name} {
    color: $value;
  }
}
```

---

### 8. Exemple Complet : Créer un Bouton
Voici un exemple pour créer un composant bouton.

#### SCSS pour un Bouton
```scss
.btn {
  @include padding(4);
  border-radius: 0.5rem;
  background-color: map-get($colors, primary);
  color: white;
  font-weight: bold;

  @include responsive(md) {
    padding: map-get($spacing, 8);
  }

  &:hover {
    background-color: darken(map-get($colors, primary), 10%);
  }
}
```

---

## Avantages de SCSS pour un Design System
- **Contrôle total** : Vous pouvez personnaliser chaque aspect du design system.
- **Lisibilité** : La structure SCSS facilite la compréhension et la gestion.
- **Compatibilité** : Fonctionne sans dépendances externes comme Tailwind CSS.

---

En suivant ces étapes, vous pourrez créer un design system SCSS puissant et adapté à vos besoins tout en vous inspirant de la logique de Tailwind CSS.

