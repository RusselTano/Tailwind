const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({
  addBase,
  theme,
  matchUtilities,
  addComponents,
  addVariant,
}) {
  addBase({
    h1: {
      fontSize: theme("fontSize.3xl"),
      fontWeight: theme("fontWeight.bold"),
    },
  });
  addComponents({
    ".card": {
      borderdWidth: theme("borderWidth.2"),
      borderRadius: theme("borderRadius.md"),
    },
  });
  addVariant("yo", "&:hover");
  matchUtilities(
    {
      "animation-delay": (value) => {
        return {
          "animation-delay": value,
        };
      },
    },
    {
      values: {
        100: "100ms",
        200: "200ms",
      },
    },
  );
});