import { MagentoCartShippingMethod } from '../../models/responses/cart-shipping-method';
export interface MagentoGetSelectedShippingMethodResponse {
    cart: {
        __typename: string;
        shipping_addresses: {
            __typename: string;
            selected_shipping_method: MagentoCartShippingMethod;
        }[];
    };
}
