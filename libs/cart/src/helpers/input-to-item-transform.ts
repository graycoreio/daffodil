import {
  DaffCartItem,
  DaffCartItemInput,
} from '../models/public_api';

export const daffCartItemInputToItemTransform = (input: DaffCartItemInput): DaffCartItem => ({
  type: input.type,
  product_id: input.productId,
  qty: input.qty,

  item_id: null,
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
