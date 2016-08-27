module.exports = {
  extends: [
    'eslint:recommended',
    './rules/best-practices.json',
    './rules/errors.json',
    './rules/esnext.json',
    './rules/node.json',
    './rules/strict-mode.json',
    './rules/style.json',
    './rules/variables.json'
  ]
};
