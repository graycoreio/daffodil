import {
  FormControl,
  FormGroup,
} from '@angular/forms';

import { DemoCheckoutAddressFormGroup } from '../../forms/address/models/address-form.type';
import { PaymentInfoFormGroup } from '../payment-info-form/models/payment-form.type';

export type DemoCheckoutBillingFormGroup = FormGroup<{
  paymentInfo: PaymentInfoFormGroup;
  address: DemoCheckoutAddressFormGroup;
  bsas: FormControl<boolean>;
}>;


