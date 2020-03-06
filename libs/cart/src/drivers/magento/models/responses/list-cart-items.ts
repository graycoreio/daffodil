import { MagentoCartItem } from '../outputs/cart-item';

export interface MagentoListCartItemsResponse {
  cart: {
    items: MagentoCartItem[];
  };
}
