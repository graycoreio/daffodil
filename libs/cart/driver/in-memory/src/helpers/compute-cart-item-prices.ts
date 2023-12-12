import { faker } from '@faker-js/faker/locale/en_US';

import { DaffCartItem } from '@daffodil/cart';
import { daffMultiply } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

export function daffCartInMemoryComputeCartItemPrices(cartItem: DaffCartItem, products: DaffProduct[]): DaffCartItem {
  cartItem.price = products.find(({ id }) => id === cartItem.product_id)?.price || 0;
  cartItem.row_total = daffMultiply(cartItem.price, cartItem.qty);

  return cartItem;
}
