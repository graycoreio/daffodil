import { MagentoGetCartResponse } from './get-cart';

export interface MagentoUpdateBillingAddressWithEmailResponse {
  setBillingAddressOnCart: MagentoGetCartResponse;
  setGuestEmailOnCart: {
    cart: {
      email: MagentoGetCartResponse['cart']['email']
    }
  };
}
