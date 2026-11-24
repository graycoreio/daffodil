import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { DaffErrorMessageComponent } from '@daffodil/design/form';
import { DAFF_SWATCH_COMPONENTS } from '@daffodil/design/swatch';

@Component({
  selector: 'swatch-with-forms-example',
  templateUrl: './swatch-with-forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWATCH_COMPONENTS,
    DaffErrorMessageComponent,
    ReactiveFormsModule,
  ],
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `],
})
export class SwatchWithFormsExampleComponent {
  colors = [
    { value: 'red', label: 'Red', color: '#ec0019' },
    { value: 'green', label: 'Green', color: '#00852e' },
    { value: 'blue', label: 'Blue', color: '#1f66ff' },
  ];

  colorControl = new FormControl<string>(null, Validators.required);
}
