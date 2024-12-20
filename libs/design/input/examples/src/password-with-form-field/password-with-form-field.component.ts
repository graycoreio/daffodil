import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

import {
  DaffFormFieldModule,
  DaffInputModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'password-with-form-field',
  templateUrl: './password-with-form-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffFormFieldModule, DaffInputModule, ReactiveFormsModule],
})
export class PasswordWithFormFieldComponent {
  control: UntypedFormControl = new UntypedFormControl();
}
