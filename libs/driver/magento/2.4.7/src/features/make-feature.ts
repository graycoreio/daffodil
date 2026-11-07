import {
  Provider,
  EnvironmentProviders,
} from '@angular/core';

import { MagentoDriverFeatureKind } from './kind.enum';
import { MagentoDriverFeature } from './type';

/**
 * Creates a magento driver feature for {@link provideMagentoDriver}.
 */
export function makeMagentoDriverFeature(
  kind: MagentoDriverFeatureKind | string,
  providers: Array<Provider | EnvironmentProviders>,
): MagentoDriverFeature {
  return { ɵkind: kind, ɵproviders: providers };
}
