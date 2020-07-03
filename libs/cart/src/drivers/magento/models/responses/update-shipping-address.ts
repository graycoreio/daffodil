import { MagentoGetCartResponse } from './get-cart';

export interface MagentoUpdateShippingAddressResponse {
  setShippingAddressesOnCart: MagentoGetCartResponse;
  setGuestEmailOnCart: {
    cart: {
      email: MagentoGetCartResponse['cart']['email']
    }
  }
}

