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
  DaffNativeSelectModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'native-select-error',
  templateUrl: './native-select-error.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffFormFieldModule,
    DaffNativeSelectModule,
    ReactiveFormsModule,
  ],
})
export class NativeSelectErrorComponent {
  control: UntypedFormControl = new UntypedFormControl('', [
    Validators.email,
    Validators.required,
  ]);
}
