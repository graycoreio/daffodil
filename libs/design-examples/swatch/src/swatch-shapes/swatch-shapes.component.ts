import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SWATCH_COMPONENTS } from '@daffodil/design/swatch';

@Component({
  selector: 'swatch-shapes-example',
  templateUrl: './swatch-shapes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWATCH_COMPONENTS,
  ],
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `],
})
export class SwatchShapesExampleComponent {
  colors = [
    { value: 'red', label: 'Red', color: '#ec0019' },
    { value: 'green', label: 'Green', color: '#00852e' },
    { value: 'blue', label: 'Blue', color: '#1f66ff' },
  ];
}
