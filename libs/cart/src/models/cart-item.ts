import {
  DaffProductImage,
  DaffProduct
} from '@daffodil/product';
import { ID } from '@daffodil/core';

import { DaffCartItemInputType } from './cart-item-input';

export interface DaffCartItemDiscount {
  amount: number;
  label: string;
}

export interface DaffCartItem {
	item_id: ID;
	type: DaffCartItemInputType;
  image?: DaffProductImage;
  product_id: DaffProduct['id'];
  parent_item_id: ID;
  sku: string;
  name: string;
  qty: number;
  /**
   * The price per item, not including cart discounts.
   */
  price: number;
  /**
   * The total for the entire row, not including cart discounts.
   */
  row_total: number;
	in_stock: boolean;
  /**
   * A list of discounts applied to the cart item row.
   */
  discounts: DaffCartItemDiscount[];
}
