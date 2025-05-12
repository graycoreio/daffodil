import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffQuantityFieldModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-quantity-field',
  templateUrl: './basic-quantity-field.component.html',
  styleUrls: ['./basic-quantity-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffQuantityFieldModule,
    ReactiveFormsModule,
  ],
})
export class BasicQuantityFieldComponent {
  control = new UntypedFormControl(1);
}
