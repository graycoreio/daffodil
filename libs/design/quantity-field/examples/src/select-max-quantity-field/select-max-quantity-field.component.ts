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
  selector: 'select-max-quantity-field',
  templateUrl: './select-max-quantity-field.component.html',
  styleUrls: ['./select-max-quantity-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffFormFieldModule,
    DaffQuantityFieldModule,
    ReactiveFormsModule,
  ],
})
export class SelectMaxQuantityFieldComponent {
  control = new UntypedFormControl(1);
}
