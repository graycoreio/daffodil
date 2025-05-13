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
  DaffQuantityFieldComponent,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'select-max-quantity-field',
  templateUrl: './select-max-quantity-field.component.html',
  styleUrls: ['./select-max-quantity-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffQuantityFieldComponent,
    ReactiveFormsModule,
  ],
})
export class SelectMaxQuantityFieldComponent {
  control = new UntypedFormControl(1);
}
