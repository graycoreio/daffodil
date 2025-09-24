import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-hint-and-error',
  templateUrl: './input-hint-and-error.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffInputComponent,
    ReactiveFormsModule,
    FaIconComponent,
  ],
})
export class InputHintAndErrorComponent {
  faCheck = faCheck;
  faXmark = faXmark;

  control: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.minLength(8)]);
}
