import { MagentoCartItem } from '../../models/responses/cart-item';
export interface MagentoListCartItemsResponse {
    cart: {
        __typename: string;
        items: MagentoCartItem[];
    };
}
