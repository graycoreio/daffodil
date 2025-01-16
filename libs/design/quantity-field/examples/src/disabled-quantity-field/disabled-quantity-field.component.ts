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
  selector: 'disabled-quantity-field',
  templateUrl: './disabled-quantity-field.component.html',
  styleUrls: ['./disabled-quantity-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffFormFieldModule,
    DaffQuantityFieldModule,
    ReactiveFormsModule,
  ],
})
export class DisabledQuantityFieldComponent {
  control = new UntypedFormControl({ value : '1', disabled: true });
}
