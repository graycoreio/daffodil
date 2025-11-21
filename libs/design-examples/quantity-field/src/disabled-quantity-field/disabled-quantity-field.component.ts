import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffQuantityFieldComponent } from '@daffodil/design/quantity-field';

@Component({
  selector: 'disabled-quantity-field-example',
  templateUrl: './disabled-quantity-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffQuantityFieldComponent,
    ReactiveFormsModule,
  ],
})
export class DisabledQuantityFieldExampleComponent {
  control = new UntypedFormControl({ value : '1', disabled: true });
}
