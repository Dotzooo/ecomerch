module.exports = {
  env: {
    browser: true, // 啟用瀏覽器環境
    es2021: true, // ES2021版本
  },
  extends: [
    'eslint:recommended', // 使用 ESLint 的基本規則
    'plugin:react/recommended', // 使用 react 的規則
    // "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
    sourceType: 'module',
  },
  plugins: ['react'], // 啟用 react 插件
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
};
