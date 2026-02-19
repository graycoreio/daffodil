import { KeyValuePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import {
  DaffDocsSassItem,
  DaffDocsSassType,
} from '@daffodil/docs-utils';

import { DaffDocsPaletteShadeSortPipe } from './shade-sort.pipe';

/**
 * A component that displays color palettes from sass documentation items.
 * Filters the provided items to only show those belonging to the 'color-palettes' group
 * and renders them with their shades.
 */
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

  /**
   * The sass documentation items to display.
   */
  readonly items = input.required<Array<DaffDocsSassItem>>();

  /**
   * Computed list of items filtered to only include color palettes.
   */
  readonly palettes = computed(() =>
    this.items()?.filter((item) => item.group.includes('color-palettes')),
  );
}
