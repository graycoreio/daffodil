import {
  DaffCartItem,
  DaffCartItemInput,
} from '../models/public_api';

/**
 * Creates a stub cart item from the cart item input.
 */
export const daffCartItemInputToItemTransform = (input: DaffCartItemInput): DaffCartItem => ({
  type: input.type,
  product_id: input.productId,
  qty: input.qty,

  id: null,
  parent_item_id: null,
  sku: null,
  name: null,
  price: null,
  row_total: null,
  in_stock: false,
  discounts: [],
  url: null,
});
