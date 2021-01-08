import { MagentoGetCartResponse } from './get-cart';

export interface MagentoUpdateBillingAddressWithEmailResponse {
  setBillingAddressOnCart: MagentoGetCartResponse;
  setGuestEmailOnCart: {
    __typename?: string;
    cart: {
      __typename?: string;
      email: MagentoGetCartResponse['cart']['email']
    }
  };
}
