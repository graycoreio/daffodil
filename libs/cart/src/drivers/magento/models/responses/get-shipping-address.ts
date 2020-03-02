import { MagentoShippingAddress } from '../outputs/shipping-address';

export interface MagentoGetShippingAddressResponse {
  cart: {
    shipping_addresses: MagentoShippingAddress[];
    email: string;
  };
}
