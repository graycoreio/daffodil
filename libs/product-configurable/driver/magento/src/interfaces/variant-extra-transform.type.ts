import { DaffConfigurableProductVariant } from '@daffodil/product-configurable';

import { MagentoConfigurableProductVariant } from '../models/configurable-product';

export type MagentoConfigurableProductVariantExtraTransform<T extends MagentoConfigurableProductVariant = MagentoConfigurableProductVariant, V extends DaffConfigurableProductVariant = DaffConfigurableProductVariant> =
  (daffVariant: DaffConfigurableProductVariant, magentoVariant: T) => V;
