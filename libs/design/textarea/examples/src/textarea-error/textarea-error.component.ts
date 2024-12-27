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
  DaffTextareaModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'textarea-error',
  templateUrl: './textarea-error.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffFormFieldModule,
    DaffTextareaModule,
    ReactiveFormsModule,
  ],
})
export class TextareaErrorComponent {
  control: UntypedFormControl = new UntypedFormControl('test@example.com', [
    Validators.email,
    Validators.required,
  ]);
}
