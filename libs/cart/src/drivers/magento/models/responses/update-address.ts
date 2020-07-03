import { MagentoGetCartResponse } from './get-cart';

export interface MagentoUpdateAddressResponse {
  setBillingAddressOnCart: MagentoGetCartResponse;
  setShippingAddressesOnCart: MagentoGetCartResponse;
  setGuestEmailOnCart: {
    cart: {
      email: MagentoGetCartResponse['cart']['email']
    }
  }
}
