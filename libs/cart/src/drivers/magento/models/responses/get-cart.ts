import { MagentoCart } from '../outputs/cart';

export interface MagentoGetCartResponse {
	__typename: string;
  cart: MagentoCart;
}
