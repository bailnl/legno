module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/recommended",
    require.resolve("@vue/eslint-config-prettier")
  ],
  "rules": {
    "vue/html-self-closing": "off",
    "vue/html-closing-bracket-newline": "error",
    "prettier/prettier": "error",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_$" }],
    "vue/require-default-prop": "off",
    "vue/name-property-casing": "off"
  }
}
