import { KeyValuePipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';

import {
  DaffDocsSassItem,
  DaffDocsSassType,
} from '@daffodil/docs-utils';

import { DaffDocsPaletteShadeSortPipe } from './shade-sort.pipe';

@Component({
  selector: 'daff-docs-color-palettes',
  templateUrl: './color-palettes.component.html',
  styleUrls: ['./color-palettes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    KeyValuePipe,
    DaffDocsPaletteShadeSortPipe,
  ],
})
export class DaffDocsColorPalettesComponent {
  readonly COLOR = DaffDocsSassType.COLOR;
  readonly MAP = DaffDocsSassType.MAP;

  readonly items = input.required<Array<DaffDocsSassItem>>();
  readonly palettes = computed(() =>
    this.items().filter((item) => item.group.includes('color-palettes')),
  );
}
