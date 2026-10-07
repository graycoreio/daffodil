import { DaffCompositeProductItem } from '@daffodil/product-composite';

import { MagentoBundledProductItem } from '../models/bundled-product';

export type MagentoBundleProductItemExtraTransform<T extends MagentoBundledProductItem = MagentoBundledProductItem, V extends DaffCompositeProductItem = DaffCompositeProductItem> =
  (daffItem: DaffCompositeProductItem, magentoItem: T) => V;
