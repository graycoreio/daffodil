import { FormGroup } from '@angular/forms';

import { AddressFormGroup } from '../../../forms/address-form/models/address-form.type';
import { PaymentInfoFormGroup } from '../../payment-info-form/models/payment-form.type';

export type PaymentFormGroup = FormGroup<{
  paymentInfo: PaymentInfoFormGroup;
  address: AddressFormGroup;
}>;


