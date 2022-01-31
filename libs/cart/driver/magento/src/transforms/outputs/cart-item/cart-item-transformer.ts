import { DaffCartItem } from '@daffodil/cart';

import { DaffCartMagentoCartItemExtraTransform } from '../../../interfaces/public_api';
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
 * Transforms the MagentoCartItem into a DaffCartItem.
 * Accepts extra transforms that are run after the standard Daffodil transforms.
 *
 * @param cartItem a MagentoCartItem
 */
export function transformMagentoCartItem(cartItem: MagentoCartItem, ...extraTransforms: DaffCartMagentoCartItemExtraTransform[]): DaffCartItem {
  let daffCartItem: DaffCartItem;

  switch(cartItem.__typename) {
    case MagentoCartItemTypeEnum.Bundle:
      daffCartItem = transformMagentoBundleCartItem(<MagentoBundleCartItem>cartItem);
      break;
    case MagentoCartItemTypeEnum.Configurable:
      daffCartItem = transformMagentoConfigurableCartItem(<MagentoConfigurableCartItem>cartItem);
      break;
    case MagentoCartItemTypeEnum.Simple:
    default:
      daffCartItem = transformMagentoSimpleCartItem(cartItem);
  }

  return extraTransforms.reduce(
    (item, transform) => transform(item, cartItem),
    daffCartItem,
  );
}
