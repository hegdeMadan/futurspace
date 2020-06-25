module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "tsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react-native",
    "@typescript-eslint"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
    ],
  }
};