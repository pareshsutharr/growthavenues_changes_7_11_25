// ESLint flat config for ESLint v9+
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  // Ignore generated/infra files to keep signal high
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "**/*.config.*",
      "tests/**",
      "api/**",
      "**/*.test.js",
      "**/*.test.jsx",
      "dev-api-server.mjs",
    ],
  },
  // App source files
  {
    files: ["src/**/*.{js,jsx}"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: { "react-hooks": reactHooks },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error", "info", "debug"] }],
      "no-empty": ["error", { allowEmptyCatch: true }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
    },
  },
];
