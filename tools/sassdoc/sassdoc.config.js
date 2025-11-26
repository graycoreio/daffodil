module.exports = {
  src: [
    '../../libs/design/scss/**/*.scss',
    '!../../libs/design/scss/**/*.spec.scss'
  ],
  dest: '../../dist/docs/sass-docs',
  theme: 'default',
  autofill: ['requires', 'throws', 'content'],
  groups: {
    'daffodil-docs': 'Daffodil Docs',
    'theming': 'Theming Utilities',
    'typography': 'Typography', 
    'layout': 'Layout',
    'interactions': 'Interactions',
    'utilities': 'General Utilities'
  },
  display: {
    access: ['public'],
    alias: false
  },
  package: '../../package.json',
  verbose: true,
  parse: true
}; 