import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  selector: 'form-field-validated-hint-example',
  templateUrl: './form-field-validated-hint.component.html',
  styleUrl: './form-field-validated-hint.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffInputComponent,
    ReactiveFormsModule,
  ],
})
export class FormFieldValidatedHintExampleComponent {
  passwordControl = new FormControl('', [Validators.minLength(8)]);

  get isControlValid(): boolean {
    return this.passwordControl.dirty && this.passwordControl.valid;
  }
}
