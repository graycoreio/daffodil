import { MagentoGetCartResponse } from '../get-cart/public_api';

export interface MagentoSetSelectedPaymentMethodResponse {
  setPaymentMethodOnCart: MagentoGetCartResponse;
}
