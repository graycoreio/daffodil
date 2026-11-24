import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

import { DAFF_SWATCH_COMPONENTS } from '@daffodil/design/swatch';

@Component({
  selector: 'swatch-picker-example',
  templateUrl: './swatch-picker.component.html',
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
export class SwatchPickerExampleComponent {
  colors = [
    { value: '#ec0019', label: 'Red' },
    { value: '#b36200', label: 'Bronze' },
    { value: '#ffc810', label: 'Yellow' },
    { value: '#00852e', label: 'Green' },
    { value: '#00835f', label: 'Turquoise' },
    { value: '#1f66ff', label: 'Blue' },
    { value: '#6a57ff', label: 'Purple' },
    { value: '#070707', label: 'Black' },
    { value: '#ffffff', label: 'White' },
  ];

  selected = signal('#ec0019');

  selectedLabel = computed(() =>
    this.colors.find((color) => color.value === this.selected())?.label ?? `Custom (${this.selected()})`,
  );
}
