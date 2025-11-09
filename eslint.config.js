// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import localPlugin from "./eslint-rules/index.js";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // ✅ این آبجکت را برای تنظیمات React اضافه می‌کنیم
    ...pluginReactConfig,
    settings: {
      react: {
        version: "detect", // به صورت خودکار نسخه React را تشخیص می‌دهد
      },
    },
  },
  {
    plugins: {
      local: localPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "local/no-console-log": "error",
    },
  },
];
