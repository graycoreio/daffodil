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
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'custom-range-quantity-field',
  templateUrl: './custom-range-quantity-field.component.html',
  styleUrls: ['./custom-range-quantity-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffQuantityFieldComponent,
    ReactiveFormsModule,
  ],
})
export class CustomRangeQuantityFieldComponent {
  control = new UntypedFormControl(5);
}
