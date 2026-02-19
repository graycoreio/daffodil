import { AsyncPipe } from '@angular/common';
import {
  Component,
  inject,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffDocsColorPalettesComponent } from '@daffodil/docs';
import { DaffDocsSassItem } from '@daffodil/docs-utils';

import { DaffioColorPaletteService } from './service/palettes.service';

/**
 * A container component that displays the design system's color palettes.
 * Fetches color palette documentation from {@link DaffioColorPaletteService} and
 * renders them using {@link DaffDocsColorPalettesComponent}.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DaffDocsColorPalettesComponent, AsyncPipe],
  template: `
		<daff-docs-color-palettes [items]="colorPalettes$ | async"></daff-docs-color-palettes>
	`,
})
export class DaffioColorPalettesComponent implements OnInit {
  private service = inject(DaffioColorPaletteService);

  /**
   * Observable stream of color palette sass documentation items.
   */
  colorPalettes$: Observable<Array<DaffDocsSassItem>>;

  ngOnInit(): void {
    this.colorPalettes$ = this.service.get();
  }
}
