import { DaffCompositeProductItem } from '@daffodil/product-composite';

import { MagentoBundledProductItem } from '../models/bundled-product';

export type MagentoBundleProductItemTransform<T extends MagentoBundledProductItem = MagentoBundledProductItem, V extends DaffCompositeProductItem = DaffCompositeProductItem> =
  (magentoItem: T) => V;
