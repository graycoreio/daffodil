import { DaffCartItem, MagentoCartItem } from '@daffodil/cart';

import { MagentoCartItemFactory } from '../../../factories/magento/cart-item.factory';
import { DaffCartItemFactory } from '../../../factories/cart-item.factory';

/**
 * Creates mocked DaffCartItem and MagentoCartItem with matching fields.
 */
export function cartItemMocks(): {
  daff: DaffCartItem;
  magento: MagentoCartItem;
} {
  const daff: DaffCartItem = (new DaffCartItemFactory()).create();
  const magento: MagentoCartItem = (new MagentoCartItemFactory()).create();

  magento.id = String(daff.item_id);
  // magento.product.image.label = daff.image.label;
  // magento.product.image.url = daff.image.url;
  magento.product.id = Number(daff.product_id);
  magento.product.sku = daff.sku;
  magento.product.name = daff.name;
  magento.product.description = daff.description;
  magento.quantity = daff.qty;
  magento.prices.price.value = daff.price;
  magento.prices.row_total.value = daff.row_total;

  return {daff, magento}
}
