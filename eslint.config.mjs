import eslintReact from "eslint-plugin-react";

export default [
  {
    ignores: ["node_modules/", "dist/"],
  },
  {
    plugins: eslintReact,
    languageOptions: {
      globals: {
        HTMLElement: true,
        customElements: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];
