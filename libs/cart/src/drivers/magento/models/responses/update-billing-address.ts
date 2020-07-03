import { MagentoGetCartResponse } from './get-cart';

export interface MagentoUpdateBillingAddressResponse {
  setBillingAddressOnCart: MagentoGetCartResponse;
  setGuestEmailOnCart: {
    cart: {
      email: MagentoGetCartResponse['cart']['email']
    }
  };
}
