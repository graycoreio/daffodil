import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_NATIVE_SELECT_COMPONENTS } from '@daffodil/design/native-select';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'native-select-error',
  templateUrl: './native-select-error.component.html',
  styles: [`
    daff-form-field {
      max-width: 25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_NATIVE_SELECT_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class NativeSelectErrorComponent {
  control = new UntypedFormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);
}
