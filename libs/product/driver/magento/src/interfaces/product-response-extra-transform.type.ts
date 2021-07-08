import { DaffProductDriverResponse } from '@daffodil/product/driver';

import { MagentoProduct } from '../models/magento-product';

export type DaffMagentoProductResponseExtraTransform<T extends MagentoProduct = MagentoProduct, V extends DaffProductDriverResponse = DaffProductDriverResponse> =
  (daffProductResponse: DaffProductDriverResponse, magentoProduct: T, mediaUrl: string) => V;
