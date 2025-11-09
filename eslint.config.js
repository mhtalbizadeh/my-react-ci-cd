// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import localPlugin from "./eslint-rules/index.js";

export default [
  // ✅ آبجکت جدید برای نادیده گرفتن پوشه‌ها
  // این باید در بالاترین سطح باشد
  {
    ignores: [
      "dist/", // نادیده گرفتن پوشه بیلد
      "scripts/", // نادیده گرفتن پوشه اسکریپت‌های سفارشی
    ],
  },

  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReactConfig,
    settings: {
      react: {
        version: "detect",
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
