module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    './rules/best-practices.json',
    './rules/errors.json',
    './rules/esnext.json',
    './rules/filenames.json',
    './rules/import.json',
    './rules/node.json',
    './rules/strict-mode.json',
    './rules/style.json',
    './rules/variables.json'
  ],
  plugins: [
    'import',
    'filenames'
  ]
}
