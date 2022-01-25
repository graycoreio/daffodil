import {
  DaffCartItemInputType,
  DaffCompositeCartItem,
  DaffCompositeCartItemOption,
} from '@daffodil/cart';
import { MagentoProductStockStatusEnum } from '@daffodil/product/driver/magento';

import { MagentoBundleCartItem } from '../../../models/responses/cart-item';
import { transformMagentoSimpleCartItem } from './simple-cart-item-transformer';

function transformBundleCartItemOption(option: MagentoBundleCartItem['bundle_options'][0]): DaffCompositeCartItemOption {
  return {
    option_id: String(option.values[0].id),
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
    in_stock: bundleCartItem.bundle_options.reduce(
      (optionsInStock, option) => optionsInStock && option.values.reduce(
        (valuesInStock, value) =>
          // TODO: change when IE support is dropped
          // find the referenced bundle item option and check its stock status
          valuesInStock && bundleCartItem.product.items.filter(({ uid }) =>
            uid === option.uid,
          )[0]?.options.filter(({ uid }) =>
            uid === value.uid,
          )[0]?.product.stock_status === MagentoProductStockStatusEnum.InStock,
        true,
      ),
      true,
    ),
  };
}
