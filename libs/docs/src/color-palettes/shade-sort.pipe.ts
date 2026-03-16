import { KeyValue } from '@angular/common';
import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { DaffDocsSassParsedMap } from '@daffodil/docs-utils';

@Pipe({
  name: 'daffDocsPaletteShadeSort',
})
export class DaffDocsPaletteShadeSortPipe implements PipeTransform {
  transform(value: Array<KeyValue<keyof DaffDocsSassParsedMap, DaffDocsSassParsedMap[keyof DaffDocsSassParsedMap]>>) {
    return value.sort((a, b) => Number(a.key) - Number(b.key));
  }
}
