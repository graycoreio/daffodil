import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { DAFF_CHECKBOX_COMPONENTS } from '@daffodil/design/checkbox';

@Component({
  selector: 'required-checkbox',
  templateUrl: './required-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class RequiredCheckboxExampleComponent {
  terms = new UntypedFormControl(false, Validators.requiredTrue);
}
