import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

const compat = new FlatCompat();

export default [
  js.configs.recommended,

  // Convert legacy configs (like eslint-config-next) into flat configs
  ...compat.extends("next"),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { react: reactPlugin },
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      "react/jsx-uses-react": "error",
    },
  },

  { ignores: ["dist/*", ".next/*"] },
];
