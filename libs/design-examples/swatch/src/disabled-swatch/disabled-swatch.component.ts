import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SWATCH_COMPONENTS } from '@daffodil/design/swatch';

@Component({
  selector: 'disabled-swatch-example',
  templateUrl: './disabled-swatch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWATCH_COMPONENTS,
  ],
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `],
})
export class DisabledSwatchExampleComponent {
  colors = [
    { value: 'red', label: 'Red', color: '#ec0019', inStock: true },
    { value: 'green', label: 'Green', color: '#00852e', inStock: false },
    { value: 'blue', label: 'Blue', color: '#1f66ff', inStock: true },
    { value: 'black', label: 'Black', color: '#070707', inStock: false },
  ];
}
