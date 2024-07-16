import { Declaration } from 'postcss';
import scss from 'postcss-scss';

export interface PaletteDoc {
  docType: 'palette';
  id: string;
  title: string;
  palettes: Array<{
    name: string;
    value: string;
  }>;
}

export function scssFileReaderFactory() {
  return {
    name: 'scssFileReader',
    defaultPattern: /\.scss$/,
    getDocs: (fileInfo): Array<PaletteDoc> => {
      const parsed = scss.parse(fileInfo.content);
      return [{
        docType: 'palette',
        id: 'base',
        title: 'Base Palette',
        palettes: parsed.nodes.filter((node) => node.type === 'decl').map((decl: Declaration) => ({
          name: decl.prop,
          value: decl.value,
        })),
      }];
    },
  };
}

