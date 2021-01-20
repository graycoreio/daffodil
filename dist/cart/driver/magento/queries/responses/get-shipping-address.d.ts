import { MagentoShippingAddress } from '../../models/responses/shipping-address';
export interface MagentoGetShippingAddressResponse {
    cart: {
        __typename: string;
        shipping_addresses: MagentoShippingAddress[];
        email: string;
    };
}
