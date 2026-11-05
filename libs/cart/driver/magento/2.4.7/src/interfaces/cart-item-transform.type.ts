import { DaffCartItem } from '@daffodil/cart';

import { MagentoCartItem } from '../models/public_api';

export type DaffCartMagentoCartItemTransform<T extends MagentoCartItem = MagentoCartItem, V extends DaffCartItem = DaffCartItem> =
  (daffCartItem: DaffCartItem, magentoCartItem: T) => V;
