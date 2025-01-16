import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  DaffFormFieldModule,
  DaffInputModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-error',
  templateUrl: './input-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffFormFieldModule,
    DaffInputModule,
    ReactiveFormsModule,
  ],
})
export class InputErrorComponent {
  control: UntypedFormControl = new UntypedFormControl('test@example.com', [
    Validators.email,
    Validators.required,
  ]);
}
