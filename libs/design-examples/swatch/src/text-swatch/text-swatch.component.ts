import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';

import { DAFF_SWATCH_COMPONENTS } from '@daffodil/design/swatch';

@Component({
  selector: 'text-swatch-example',
  templateUrl: './text-swatch.component.html',
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
export class TextSwatchExampleComponent {
  sizes = [
    { value: 'xs', label: 'XS', inStock: true },
    { value: 's', label: 'S', inStock: true },
    { value: 'm', label: 'M', inStock: true },
    { value: 'l', label: 'L', inStock: false },
    { value: 'xl', label: 'XL', inStock: true },
    { value: 'xxl', label: '2XL', inStock: true },
  ];

  selected = signal('m');
}
