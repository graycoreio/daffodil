import { DaffAddress } from '@daffodil/core';

import { PaymentInfo } from '../../../models/payment/payment-info';

export interface DaffBillingReducerState {
  billingAddress: DaffAddress;
  billingAddressIsShippingAddress: boolean;
  paymentInfo: PaymentInfo;
}
