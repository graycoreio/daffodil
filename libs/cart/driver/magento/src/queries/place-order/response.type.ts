import { MagentoCart } from '../../models/responses/cart';
import { MagentoCartShippingMethod } from '../../models/responses/cart-shipping-method';

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
