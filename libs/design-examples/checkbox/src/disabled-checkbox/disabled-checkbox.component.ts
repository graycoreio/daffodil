import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';

import { DAFF_CHECKBOX_COMPONENTS } from '@daffodil/design/checkbox';

@Component({
  selector: 'disabled-checkbox',
  templateUrl: './disabled-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class DisabledCheckboxExampleComponent {
  terms = new UntypedFormControl(false, Validators.requiredTrue);
}
