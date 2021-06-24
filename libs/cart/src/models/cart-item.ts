import {
  ID,
  DaffLocatable,
	DaffIdentifiable,
} from '@daffodil/core';
import {
  DaffProductImage,
  DaffProduct,
} from '@daffodil/product';

import { DaffCartItemInputType } from './cart-item-input';

export interface DaffCartItemDiscount {
  amount: number;
  label: string;
}

export interface DaffCartItem extends DaffLocatable, DaffIdentifiable {
	/**
	 * @deprecated use id instead.
	 */
	item_id: ID;
	type: DaffCartItemInputType;
  image?: DaffProductImage;
  product_id: DaffProduct['id'];
  parent_item_id: ID;
  sku: string;
  name: string;
  qty: number;
  /**
   * The price per item, excluding cart discounts.
   * This includes any discounts and sales that apply to the product or category.
   */
  price: number;
  /**
   * The total for the entire row, not including cart discounts.
   * This includes any discounts and sales that apply to the product or category.
   */
  row_total: number;
	in_stock: boolean;
  /**
   * A list of discounts applied to the cart item row.
   */
  discounts: DaffCartItemDiscount[];
}
