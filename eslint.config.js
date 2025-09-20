import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", "node_modules", "build"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      //prettier
      "prettier/prettier": "error",

      //basic-react rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-key": "error",

      //react-hook rules
      "react-hooks/rules-of-hooks": "error", // hooks must follow rules
      "react-hooks/exhaustive-deps": "warn",

      //typescript stict-rule
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],

      // 🔹 Common best practices
      "no-console": "warn", // usefull in production
      "no-debugger": "error",
      eqeqeq: ["error", "always"], // prefer === over ==
      curly: ["error", "all"], // enforce {} for if/else
      "no-var": "error",
      "prefer-const": "error",
      "no-duplicate-imports": "error",

      //styling
      quotes: ["error", "double"],
      "jsx-quotes": ["error", "prefer-double"],
      semi: ["error", "always"],
    },
  },
);
