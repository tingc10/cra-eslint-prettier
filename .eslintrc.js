module.exports = {
  extends: [
    'plugin:jest/recommended',
    'react-app',
    'react-app/jest',
    "plugin:prettier/recommended"
  ],
  plugins: ['react', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': "error",
  },
};
