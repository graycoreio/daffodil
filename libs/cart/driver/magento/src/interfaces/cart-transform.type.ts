import { DaffCart } from '@daffodil/cart';

import { MagentoCart } from '../models/public_api';

/**
 * A transform for the Magento driver that can add extra fields or otherwise modify the cart driver response.
 */
export type DaffCartMagentoCartTransform<T extends MagentoCart = MagentoCart, V extends DaffCart = DaffCart> =
  (daffCart: DaffCart, magentoCart: T) => V;
