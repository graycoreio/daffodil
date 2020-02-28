import { MagentoCartShippingMethod } from '../outputs/cart-shipping-method';

export interface ListShippingMethodsResponse {
  cart: {
    shipping_addresses: {
      available_shipping_methods: MagentoCartShippingMethod[];
    }[];
  };
}
