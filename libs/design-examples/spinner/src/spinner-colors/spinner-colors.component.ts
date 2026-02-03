import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffPalette } from '@daffodil/design';
import { DAFF_SPINNER_COMPONENTS } from '@daffodil/design/spinner';

@Component({
  selector: 'spinner-colors-example',
  templateUrl: './spinner-colors.component.html',
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SPINNER_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class SpinnerColorsExampleComponent {
  color: DaffPalette = 'primary';

  colorControl: FormControl = new FormControl('');
}
