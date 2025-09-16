// eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import nextPlugin from "eslint-plugin-next";

export default [
  // 1. Global Recommended Rules
  js.configs.recommended,

  // 2. Next.js core web vitals & TypeScript configs
  ...nextPlugin.configs["core-web-vitals"],

  // 3. React-specific configs
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

  // 4. Global ignores
  {
    ignores: ["dist/*", ".next/*"],
  },
];
