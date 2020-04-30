import { MagentoCartShippingMethod } from '../outputs/cart-shipping-method';

export interface MagentoGetSelectedShippingMethodResponse {
  cart: {
		__typename: string;
    shipping_addresses: {
			__typename: string;
      selected_shipping_method: MagentoCartShippingMethod;
    }[];
  };
}
