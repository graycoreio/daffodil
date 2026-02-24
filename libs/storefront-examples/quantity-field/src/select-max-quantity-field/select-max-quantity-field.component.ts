import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_SF_QUANTITY_FIELD_COMPONENTS } from '@daffodil/storefront/quantity-field';

@Component({
  selector: 'select-max-quantity-field-example',
  templateUrl: './select-max-quantity-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_SF_QUANTITY_FIELD_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class SelectMaxQuantityFieldExampleComponent {
  control = new UntypedFormControl(1);
}
