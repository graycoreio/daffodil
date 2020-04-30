import { MagentoCartAddress } from '../outputs/cart-address';

export interface MagentoGetBillingAddressResponse {
  cart: {
		__typename: string;
    billing_address: MagentoCartAddress;
    email: string;
  };
}
