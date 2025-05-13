import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design';
import { DaffQuantityFieldComponent } from '@daffodil/design/quantity-field';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'disabled-quantity-field',
  templateUrl: './disabled-quantity-field.component.html',
  styleUrls: ['./disabled-quantity-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffQuantityFieldComponent,
    ReactiveFormsModule,
  ],
})
export class DisabledQuantityFieldComponent {
  control = new UntypedFormControl({ value : '1', disabled: true });
}
