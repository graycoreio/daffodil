import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffProductExtraProductFactories } from '@daffodil/product/testing';
import { DaffUpsellProductFactory } from '@daffodil/upsell-products/testing';

/**
 * Provides the upsell product fields to the product extension factory.
 */
export const provideDaffUpsellProductsTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductExtraProductFactories(DaffUpsellProductFactory),
]);
