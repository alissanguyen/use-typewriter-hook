module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:jest/recommended",
    "plugin:react-hooks/recommended",
  ],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
