import { MagentoCartAddress } from './cart-address';
import { MagentoCartShippingMethod } from './cart-shipping-method';

export interface MagentoShippingAddress extends MagentoCartAddress {
  available_shipping_methods: MagentoCartShippingMethod[];
  selected_shipping_method: MagentoCartShippingMethod;
}
