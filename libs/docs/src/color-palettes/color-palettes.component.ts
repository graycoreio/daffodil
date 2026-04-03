import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import { DaffDocsSassItem } from '@daffodil/docs-utils';

import { sassItemsToPalettes } from './sass-items-to-palettes';
import { DAFF_DOCS_COLOR_STRIP_COMPONENTS } from '../color-strip/color-strip';

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
  imports: [
    DAFF_DOCS_COLOR_STRIP_COMPONENTS,
  ],
})
export class DaffDocsColorPalettesComponent {
  /**
   * The sass documentation items to display.
   */
  readonly items = input<Array<DaffDocsSassItem>>([]);

  /**
   * Computed list of items filtered to only include color palettes,
   * mapped to the ColorPalette view model.
   */
  readonly palettes = computed(() => sassItemsToPalettes(this.items()));
}
