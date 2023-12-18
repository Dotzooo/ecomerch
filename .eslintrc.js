module.exports = {
  env: {
    browser: true, // 啟用瀏覽器環境
    es2021: true, // ES2021版本
  },
  extends: [
    "eslint:recommended", // 使用 ESLint 的基本規則
    "plugin:react/recommended", // 使用 react 的規則
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest", // 使用最新的 ECMAScript 版本
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"], // 啟用 react 插件
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
};
