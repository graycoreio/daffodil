import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';
import { DAFF_MODAL_COMPONENTS } from '@daffodil/design/modal';

import { Palette } from '../color-palette-generator/helpers';

@Component({
  selector: 'daff-docs-export-palettes-modal',
  templateUrl: './export-palettes-modal.component.html',
  styleUrl: './export-palettes-modal.component.scss',
  imports: [
    DAFF_MODAL_COMPONENTS,
    DAFF_ARTICLE_COMPONENTS,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffDocsExportPalettesModalComponent {
  palettes: Palette[] = [];

  getPaletteText(palette: Palette): string {
    const hex = palette.hexColorControl.value?.replace('#', '') ?? '';
    const entries = palette.colors
      .map((color) => `  ${color.daffIncrement}: ${color.hex}`)
      .join(',\n');
    return `$palette-${hex}: (\n${entries}\n);`;
  }
}
