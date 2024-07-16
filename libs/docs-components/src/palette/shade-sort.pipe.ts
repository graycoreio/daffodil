import { KeyValue } from '@angular/common';
import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { DaffDocsPaletteColor } from '@daffodil/docs-utils';

@Pipe({
  name: 'paletteShadeSort',
  standalone: true,
})
export class DaffDocsPaletteShadeSortPipe implements PipeTransform {
  transform(value: Array<KeyValue<keyof DaffDocsPaletteColor, DaffDocsPaletteColor[keyof DaffDocsPaletteColor]>>) {
    return value.sort((a, b) => Number(a.key) - Number(b.key));
  }
}
