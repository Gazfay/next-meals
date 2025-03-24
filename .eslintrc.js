module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    'webpack.*.mjs',
    '.eslintrc.js',
    'next.config.js',
    'buildContentSecurityPolicy.js',
    'tsconfig.json',
    'externals.mjs',
    'node_modules/',
    'initdb.js',
    'lib/',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaVersion: 2023,
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.json'],
  },
  plugins: ['react', 'prefer-arrow', 'import', '@typescript-eslint', 'react-hooks'],
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'next/core-web-vitals',
    'eslint:recommended', // base recommended JS config
    'plugin:import/typescript', // import/export syntax
    'plugin:eslint-comments/recommended', // rules for ESLint comments
    'plugin:@typescript-eslint/recommended', // base config for TS
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // enables rules for type checking
    'plugin:prettier/recommended', // code formatting rules
  ],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-misused-promises': 'off',
  },
  root: true,
};
