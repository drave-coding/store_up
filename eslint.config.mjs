import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript" , 
    "standard", 
    "plugin:tailwindcss/recommended", 
    "prettier",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',),

  ...compat.rules({
    "no-undef": "off",
  }),
  {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      project: "./tsconfig.json",
    },
  },
];

export default eslintConfig;
