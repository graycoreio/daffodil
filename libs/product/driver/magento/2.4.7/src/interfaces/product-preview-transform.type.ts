import { DaffProduct } from '@daffodil/product';

import { MagentoProduct } from '../models/magento-product';

export type DaffMagentoProductTransform<T extends MagentoProduct = MagentoProduct, V extends DaffProduct = DaffProduct> =
  (magentoProduct: T, mediaUrl: string) => V;
