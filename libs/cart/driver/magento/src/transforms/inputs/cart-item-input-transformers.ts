import {
  DaffCartItemInput,
  DaffCompositeCartItemInput,
  DaffConfigurableCartItemInput,
} from '@daffodil/cart';

import { MagentoCartItemInput } from '../../models/requests/cart-item';

export function transformSimpleCartItem(item: DaffCartItemInput): MagentoCartItemInput {
  return {
    quantity: item.qty,
    sku: item.productId,
  };
}

export function transformCompositeCartItem(item: DaffCompositeCartItemInput): MagentoCartItemInput {
  return {
    ...transformSimpleCartItem(item),
    selected_options: item.options?.map(option => option.value) || [],
  };
}

export function transformConfigurableCartItem(item: DaffConfigurableCartItemInput): MagentoCartItemInput {
  return {
    parent_sku: item.productId,
    quantity: item.qty,
    sku: item.variantId,
  };
}
