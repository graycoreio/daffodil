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
  DaffHintComponent,
  DaffInputComponent,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-error',
  templateUrl: './input-error.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffFormFieldModule,
    DaffInputComponent,
    DaffHintComponent,
    ReactiveFormsModule,
  ],
})
export class InputErrorComponent {
  control: UntypedFormControl = new UntypedFormControl('test@example.com', [
    Validators.email,
    Validators.required,
  ]);
}
