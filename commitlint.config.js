module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': async () => [0, 'always', 72],
    'subject-min-length': async () => [0, 'always', 10],
    'subject-case': async () => [
      'lower-case', // lowercase
      'upper-case', // UPPERCASE
      'camel-case', // camelCase
      'pascal-case', // PascalCase
      'sentence-case', // Sentence case
      'start-case', // Start Case
    ],
  },
}
