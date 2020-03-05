import { MagentoCartShippingMethod } from '../outputs/cart-shipping-method';

export interface MagentoGetSelectedShippingMethodResponse {
  cart: {
    selected_shipping_method: MagentoCartShippingMethod;
  };
}
