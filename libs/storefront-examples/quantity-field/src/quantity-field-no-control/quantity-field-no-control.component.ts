import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_SF_QUANTITY_FIELD_COMPONENTS } from '@daffodil/storefront/quantity-field';

@Component({
  selector: 'quantity-field-no-control-example',
  templateUrl: './quantity-field-no-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_SF_QUANTITY_FIELD_COMPONENTS,
  ],
})
export class QuantityFieldNoControlExampleComponent {
}
