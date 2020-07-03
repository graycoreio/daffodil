import { MagentoGetCartResponse } from './get-cart';

export interface MagentoUpdateAddressWithEmailResponse {
  setBillingAddressOnCart: MagentoGetCartResponse;
  setShippingAddressesOnCart: MagentoGetCartResponse;
  setGuestEmailOnCart: {
    cart: {
      email: MagentoGetCartResponse['cart']['email']
    }
  };
}
