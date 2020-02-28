import { MagentoCartShippingMethod } from '../outputs/cart-shipping-method';

export interface MagentoListShippingMethodsResponse {
  cart: {
    shipping_addresses: {
      available_shipping_methods: MagentoCartShippingMethod[];
    }[];
  };
}
