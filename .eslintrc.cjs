/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
