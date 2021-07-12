import { DaffProduct } from '@daffodil/product';

import { MagentoProduct } from '../models/magento-product';

export type DaffMagentoProductPreviewTransform<T extends MagentoProduct = MagentoProduct, V extends DaffProduct = DaffProduct> =
  (magentoProduct: T, mediaUrl: string) => V;
