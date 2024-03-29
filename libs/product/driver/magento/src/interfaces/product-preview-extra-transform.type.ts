import { DaffProduct } from '@daffodil/product';

import { MagentoProduct } from '../models/magento-product';

export type DaffMagentoProductExtraTransform<T extends MagentoProduct = MagentoProduct, V extends DaffProduct = DaffProduct> =
  (daffProduct: DaffProduct, magentoProduct: T, mediaUrl: string) => V;
