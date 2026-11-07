import {
  Provider,
  EnvironmentProviders,
} from '@angular/core';

import { MagentoDriverFeatureKind } from './kind.enum';

/**
 * A feature for {@link provideMagentoDriver}.
 */
export interface MagentoDriverFeature {
  ɵkind: MagentoDriverFeatureKind | string;
  ɵproviders: Array<Provider | EnvironmentProviders>;
}
