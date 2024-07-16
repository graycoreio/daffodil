import { KeyValue } from '@angular/common';
import {
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'paletteShadeSort',
  standalone: true,
})
export class DaffDocsPaletteShadeSortPipe implements PipeTransform {
  transform(value: Array<KeyValue<string, string>>) {
    return value.sort((a, b) => Number(a.key) - Number(b.key));
  }
}
