import { MagentoGetCartResponse } from '../get-cart/public_api';

export interface MagentoSetSelectedPaymentMethodWithBillingAndEmailResponse {
  setPaymentMethodOnCart: {
    __typename: string;
    cart: {
      id: MagentoGetCartResponse['cart']['id'];
    };
  };
  setBillingAddressOnCart: {
    __typename: string;
    cart: {
      id: MagentoGetCartResponse['cart']['id'];
    };
  };
  setGuestEmailOnCart: MagentoGetCartResponse;
}

