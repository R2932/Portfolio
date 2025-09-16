// eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import nextConfig from "eslint-config-next";

export default [
  // 1. JavaScript recommended
  js.configs.recommended,

  // 2. Next.js configs (core web vitals + TS support)
  ...nextConfig(),

  // 3. React-specific
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "react/jsx-uses-react": "error",
    },
  },

  // 4. Ignores
  {
    ignores: ["dist/*", ".next/*"],
  },
];
