import { MagentoCart } from '../../models/responses/cart';
export interface MagentoGetCartResponse {
    __typename: string;
    cart: MagentoCart;
}
