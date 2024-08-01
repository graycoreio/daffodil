module.exports = {
  extends: '../../.eslintrc.js',
  ignorePatterns: [
    '!**/*'
  ],
  overrides: [
    {
      files: [
        '*.ts'
      ],
      parserOptions: {
        project: [
          'tsconfig.json',
          'tsconfig.spec.json'
        ],
        createDefaultProgram: true
      },
    },
    {
      files: [
        '*.html'
      ],
      rules: {}
    }
  ]
}