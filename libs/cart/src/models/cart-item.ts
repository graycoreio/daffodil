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

/**
 * A discount applied to a specific cart item.
 */
export interface DaffCartItemDiscount {
  /**
   * The amount of the discount.
   */
  amount: number;
  /**
   * A human-readable label describing the discount.
   */
  label: string;
}

/**
 * A cart item.
 * Cart item types correspond to product types.
 * They hold information about the product to which they correspond and how many of said product is in the cart.
 */
export interface DaffCartItem extends DaffLocatable, DaffIdentifiable {
  /**
   * The type of cart item.
   */
  type: DaffCartItemInputType;
  /**
   * The image or thumbnail of the corresponding product.
   */
  image?: DaffProductImage;
  /**
   * The ID of the corresponding product.
   */
  product_id: DaffProduct['id'];
  // TODO: move to composites?
  parent_item_id: ID;
  // TODO: how is the different from product_id?
  sku: string;
  /**
   * A human-readable label.
   */
  name: string;
  /**
   * How many of the corresponding product is in the cart.
   */
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
  /**
   * Whether or not the specified quantity of the corresponding product is in stock.
   */
  in_stock: boolean;
  /**
   * A list of discounts applied to the cart item row.
   */
  discounts: DaffCartItemDiscount[];
}
