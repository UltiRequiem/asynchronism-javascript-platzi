module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['node_modules', 'assets', 'eslint:recommended'],
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: ['warn', 'single', 'avoid-escape'],
    'no-plusplus': 'off',
    'on-var': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
  },
};
