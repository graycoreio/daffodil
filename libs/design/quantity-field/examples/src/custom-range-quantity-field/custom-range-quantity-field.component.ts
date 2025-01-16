import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  DaffFormFieldModule,
  DaffQuantityFieldModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'custom-range-quantity-field',
  templateUrl: './custom-range-quantity-field.component.html',
  styleUrls: ['./custom-range-quantity-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffFormFieldModule,
    DaffQuantityFieldModule,
    ReactiveFormsModule,
  ],
})
export class CustomRangeQuantityFieldComponent {
  control = new UntypedFormControl(5);
}
