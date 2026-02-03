import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_SPINNER_COMPONENTS } from '@daffodil/design/spinner';

@Component({
  selector: 'spinner-sizes-example',
  templateUrl: './spinner-sizes.component.html',
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
export class SpinnerSizesExampleComponent {
  sizeControl: FormControl = new FormControl('');
}
