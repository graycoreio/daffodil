export interface SassDocConfig {
  src: string[];
  dest: string;
  theme: string;
  autofill: string[];
  groups: Record<string, string>;
  display: {
    access: string[];
    alias: boolean;
  };
  package: string;
  verbose: boolean;
  parse: boolean;
}

const config: SassDocConfig = {
  src: [
    '../../libs/design/scss/theming/_color-palettes.scss'
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

export default config; 