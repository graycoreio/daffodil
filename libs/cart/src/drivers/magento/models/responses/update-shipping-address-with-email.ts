import { MagentoGetCartResponse } from './get-cart';

export interface MagentoUpdateShippingAddressWithEmailResponse {
  setShippingAddressesOnCart: MagentoGetCartResponse;
  setGuestEmailOnCart: {
    cart: {
      email: MagentoGetCartResponse['cart']['email']
    }
  };
}

