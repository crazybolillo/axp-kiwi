import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        HTMLElement: true,
        customElements: true,
      },
    },
  },
];
