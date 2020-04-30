import { MagentoCartShippingMethod } from '../outputs/cart-shipping-method';

export interface MagentoListShippingMethodsResponse {
  cart: {
		__typename: string;
    shipping_addresses: {
			__typename: string;
      available_shipping_methods: MagentoCartShippingMethod[];
    }[];
  };
}
