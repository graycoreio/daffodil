import { MagentoCartAddress } from '../outputs/cart-address';

export interface MagentoGetBillingAddressResponse {
  cart: {
    billing_address: MagentoCartAddress;
    email: string;
  };
}
