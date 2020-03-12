import { MagentoCartShippingMethod } from '../outputs/cart-shipping-method';

export interface MagentoGetSelectedShippingMethodResponse {
  cart: {
    shipping_addresses: {
      selected_shipping_method: MagentoCartShippingMethod;
    }[];
  };
}
