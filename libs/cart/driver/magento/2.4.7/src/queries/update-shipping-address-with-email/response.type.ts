import { MagentoGetCartResponse } from '../get-cart/public_api';

export interface MagentoUpdateShippingAddressWithEmailResponse {
  setShippingAddressesOnCart: MagentoGetCartResponse;
  setGuestEmailOnCart: {
    __typename?: string;
    cart: {
      __typename?: string;
      email: MagentoGetCartResponse['cart']['email'];
    };
  };
}

