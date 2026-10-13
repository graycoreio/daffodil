import { MagentoCart } from '@daffodil/cart/driver/magento';

import { MagentoCartItemWithCrossSell } from './cart-item-with-cross-sell.type';

export interface MagentoCartWithCrossSell extends MagentoCart {
  items: Array<MagentoCartItemWithCrossSell>;
}
