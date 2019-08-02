module.exports = {
  '*.{js,jsx}': 'npm run test:prettier && npm run test:eslint',
  '*.scss': 'npm run test:stylelint',
}
