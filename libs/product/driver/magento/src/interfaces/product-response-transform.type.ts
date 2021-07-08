import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { MagentoProduct } from '../models/magento-product';

export type DaffMagentoProductResponseTransform<T extends MagentoProduct = MagentoProduct, V extends DaffProductDriverResponse = DaffProductDriverResponse> =
  (magentoProduct: T, mediaUrl: string) => V;
