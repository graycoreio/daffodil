import { MagentoGetCartResponse } from './get-cart';

export interface MagentoUpdateAddressResponse {
  setBillingAddressOnCart: {
    __typename: string;
    cart: {
      id: MagentoGetCartResponse['cart']['id']
    }
  };
  setShippingAddressesOnCart: MagentoGetCartResponse;
}
