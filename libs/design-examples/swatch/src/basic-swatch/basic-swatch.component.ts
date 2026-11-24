import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

import { DAFF_SWATCH_COMPONENTS } from '@daffodil/design/swatch';

@Component({
  selector: 'basic-swatch-example',
  templateUrl: './basic-swatch.component.html',
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
export class BasicSwatchExampleComponent {
  colors = [
    { value: 'red', label: 'Red', color: '#ec0019' },
    { value: 'green', label: 'Green', color: '#00852e' },
    { value: 'blue', label: 'Blue', color: '#1f66ff' },
    { value: 'white', label: 'White', color: '#ffffff' },
  ];

  selected = signal('red');

  selectedLabel = computed(() => this.colors.find((color) => color.value === this.selected())?.label);
}
