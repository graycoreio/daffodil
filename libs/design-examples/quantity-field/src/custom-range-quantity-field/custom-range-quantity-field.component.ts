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
  selector: 'custom-range-quantity-field-example',
  templateUrl: './custom-range-quantity-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffQuantityFieldComponent,
    ReactiveFormsModule,
  ],
})
export class CustomRangeQuantityFieldExampleComponent {
  control = new UntypedFormControl(5);
}
