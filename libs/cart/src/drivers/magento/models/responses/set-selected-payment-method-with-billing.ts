import { MagentoGetCartResponse } from './get-cart';

export interface MagentoSetSelectedPaymentMethodWithBillingResponse {
  setBillingAddressOnCart: {
    __typename: string;
    cart: {
      id: MagentoGetCartResponse['cart']['id'];
    }
  };
  setPaymentMethodOnCart: MagentoGetCartResponse;
}

