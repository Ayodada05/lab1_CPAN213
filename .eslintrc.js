module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:prettier/recommended', // ✅ kept, no change
  ],
  plugins: ['react', 'react-native', 'react-hooks'],

  // 🔥 CHANGE 1: Added parser to use Babel instead of default (espree)
  parser: '@babel/eslint-parser',

  parserOptions: {
    // 🔥 CHANGE 2: Added this so ESLint does not complain about missing .babelrc
    requireConfigFile: false,

    // 🔥 CHANGE 3: Explicitly point ESLint to your babel.config.js
    babelOptions: {
      configFile: './babel.config.js',
    },

    // ✅ These were already there (no change)
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'prefer-const': 'error',
  },

  env: {
    'react-native/react-native': true,
    jest: true,
  },
};
