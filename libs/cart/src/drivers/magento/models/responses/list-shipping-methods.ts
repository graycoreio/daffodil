import { MagentoCartShippingMethod } from '../outputs/cart-shipping-method';
import { MagentoCart } from '../outputs/cart';

export interface MagentoListShippingMethodsResponse {
  cart: {
    __typename: string;
    id: MagentoCart['id'];
    shipping_addresses: {
			__typename: string;
      available_shipping_methods: MagentoCartShippingMethod[];
    }[];
  };
}
