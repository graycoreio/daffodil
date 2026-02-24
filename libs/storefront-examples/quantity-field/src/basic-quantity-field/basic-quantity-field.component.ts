import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_SF_QUANTITY_FIELD_COMPONENTS } from '@daffodil/storefront/quantity-field';

@Component({
  selector: 'basic-quantity-field-example',
  templateUrl: './basic-quantity-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_SF_QUANTITY_FIELD_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class BasicQuantityFieldExampleComponent {
  control = new UntypedFormControl(50, [ Validators.max(5)]);
}
