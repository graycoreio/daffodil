import {
  DaffCartItemInputType,
  DaffCompositeCartItem,
  DaffCompositeCartItemOption,
} from '@daffodil/cart';

import { transformMagentoSimpleCartItem } from './simple-cart-item-transformer';
import { MagentoBundleCartItem } from '../../../models/responses/cart-item';

function transformBundleCartItemOption(option: MagentoBundleCartItem['bundle_options'][0]): DaffCompositeCartItemOption {
  return {
    id: String(option.values[0].id),
    option_label: option.label,
    value_label: option.values[0].label,
  };
}

/**
 * Transforms a MagentoBundleCartItem into a DaffCartItem.
 *
 * @param response the response from a magento cart query.
 */
export function transformMagentoBundleCartItem(bundleCartItem: MagentoBundleCartItem): DaffCompositeCartItem {
  return {
    ...transformMagentoSimpleCartItem(bundleCartItem),
    type: DaffCartItemInputType.Composite,
    options: bundleCartItem.bundle_options.map(transformBundleCartItemOption),
  };
}
