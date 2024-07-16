import { Processor } from 'dgeni';

import {
  DaffDocsPalette,
  DaffDocsPaletteColorKind,
} from '@daffodil/docs-utils';

import { PaletteDoc } from '../reader/scss-file.reader';

const shadesRegex = /^\s*(?<shade>\d+): (?<hex>#[0-9a-fA-F]+)/gm;
const getPalette = (doc: PaletteDoc): DaffDocsPalette =>
  doc.palettes.reduce((acc, palette) => {
    let name = palette.name.replace('$daff-', '');
    name = name.charAt(0).toUpperCase() + name.slice(1);
    switch (palette.value[0]) {
      case '#':
        acc[name] = {
          kind: DaffDocsPaletteColorKind.SINGLE,
          value: palette.value,
        };
        break;

      case '(':
        acc[name] = {
          kind: DaffDocsPaletteColorKind.GROUP,
          shades: Array.from(palette.value.matchAll(shadesRegex)).reduce((shades, match) => {
            shades[match.groups.shade] = match.groups.hex;
            return shades;
          }, {}),
        };
        break;

      default:
        break;
    }
    return acc;
  }, <DaffDocsPalette>{});

export class PaletteProcessor implements Processor {
  name = 'palette';
  $runAfter = ['paths-computed'];
  $runBefore = ['rendering-docs'];
  docTypes = ['palette'];

  constructor() {}

  // gotta do regex because SASS AST doesn't exist
  // https://github.com/sass/dart-sass/issues/88
  $process(docs: PaletteDoc[]) {
    return docs.map((doc) => ({
      ...doc,
      data: getPalette(doc),
    }));
  }
};
