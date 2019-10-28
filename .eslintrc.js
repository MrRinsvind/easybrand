module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  settings: {
    "react": {
      "version": "16.8.6",
    }
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "react/display-name": 0,
    "react/prop-types": 0
  }
};