import { MagentoCartItem } from '../outputs/cart-item';

export interface MagentoListCartItemsResponse {
  cart: {
		__typename: string;
    items: MagentoCartItem[];
  };
}
