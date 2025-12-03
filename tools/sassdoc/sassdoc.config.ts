import { SassDocConfig } from './src';

const config: SassDocConfig = {
  src: [
    '../../libs/design/scss/**/*.scss',
  ],
  dest: '../../dist/docs-assets/sass-docs',
  theme: 'default',
  autofill: ['requires', 'throws', 'content'],
  groups: {
    'daffodil-docs': 'Daffodil Docs',
    'color-palettes': 'Color Palettes',
    theming: 'Theming Utilities',
    typography: 'Typography',
    layout: 'Layout',
    interactions: 'Interactions',
    utilities: 'General Utilities',
  },
  display: {
    access: ['public'],
    alias: false,
  },
  package: '../../package.json',
  verbose: true,
  parse: true,
};

export default config;
