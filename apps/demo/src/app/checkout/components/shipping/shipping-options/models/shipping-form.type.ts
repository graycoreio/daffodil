import {
  FormControl,
  FormGroup,
} from '@angular/forms';

import { DaffCartShippingRate } from '@daffodil/cart';

export interface DemoCheckoutShippingForm {
  id: DaffCartShippingRate['id'];
};

export type DemoCheckoutShippingFormGroup = FormGroup<{
  id: FormControl<DaffCartShippingRate['id']>;
}>;
