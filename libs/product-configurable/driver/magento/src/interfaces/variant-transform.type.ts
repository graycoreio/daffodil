import { DaffConfigurableProductVariant } from '@daffodil/product-configurable';

import { MagentoConfigurableProductVariant } from '../models/public_api';

export type MagentoConfigurableProductVariantTransform<T extends MagentoConfigurableProductVariant = MagentoConfigurableProductVariant, V extends DaffConfigurableProductVariant = DaffConfigurableProductVariant> =
  (magentoVariant: T) => V;
