import { MagentoGetCartResponse } from './get-cart';

export interface MagentoSetSelectedPaymentMethodWithBillingResponse {
  setPaymentMethodOnCart: MagentoGetCartResponse;
  setBillingAddressOnCart: MagentoGetCartResponse;
}

