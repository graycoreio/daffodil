import { MagentoGetCartResponse } from '../get-cart/public_api';

export interface MagentoUpdateAddressResponse {
  setBillingAddressOnCart: {
    __typename?: string;
    cart: {
      __typename?: string;
      id: MagentoGetCartResponse['cart']['id'];
    };
  };
  setShippingAddressesOnCart: MagentoGetCartResponse;
}
