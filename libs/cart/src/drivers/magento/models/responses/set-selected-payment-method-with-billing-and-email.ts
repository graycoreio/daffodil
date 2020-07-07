import { MagentoGetCartResponse } from './get-cart';

export interface MagentoSetSelectedPaymentMethodWithBillingAndEmailResponse {
  setPaymentMethodOnCart: MagentoGetCartResponse;
  setBillingAddressOnCart: MagentoGetCartResponse;
  setGuestEmailOnCart: {
    __typename: string;
    cart: {
      email: MagentoGetCartResponse['cart']['email']
    }
  };
}

