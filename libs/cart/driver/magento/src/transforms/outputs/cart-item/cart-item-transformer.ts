import { DaffCartItem } from '@daffodil/cart';

import { DaffCartMagentoCartItemTransform } from '../../../interfaces/public_api';
import {
  MagentoCartItem,
  MagentoCartItemTypeEnum,
  MagentoBundleCartItem,
  MagentoConfigurableCartItem,
} from '../../../models/responses/cart-item';
import { transformMagentoBundleCartItem } from './bundle-cart-item-transformer';
import { transformMagentoConfigurableCartItem } from './configurable-cart-item-transformer';
import { transformMagentoSimpleCartItem } from './simple-cart-item-transformer';

/**
 * The standard transform for a magento cart item.
 */
export const daffTransformMagentoCartItem = (cartItem: MagentoCartItem) => {
  switch(cartItem.__typename) {
    case MagentoCartItemTypeEnum.Bundle:
      return transformMagentoBundleCartItem(<MagentoBundleCartItem>cartItem);
    case MagentoCartItemTypeEnum.Configurable:
      return transformMagentoConfigurableCartItem(<MagentoConfigurableCartItem>cartItem);
    case MagentoCartItemTypeEnum.Simple:
    default:
      return transformMagentoSimpleCartItem(cartItem);
  }
};

/**
 * Transforms the MagentoCartItem into a DaffCartItem using the provided transforms.
 */
export const transformMagentoCartItem = (daffCartItem: DaffCartItem, cartItem: MagentoCartItem, transforms: DaffCartMagentoCartItemTransform[] = []): DaffCartItem =>
  transforms.reduce(
    (item, transform) => transform(item, cartItem),
    daffCartItem,
  );
