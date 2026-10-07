import { MagentoGetCartResponse } from '../get-cart/public_api';

export interface MagentoSetSelectedPaymentMethodWithBillingResponse {
  setBillingAddressOnCart: {
    __typename: string;
    cart: {
      id: MagentoGetCartResponse['cart']['id'];
    };
  };
  setPaymentMethodOnCart: MagentoGetCartResponse;
}

