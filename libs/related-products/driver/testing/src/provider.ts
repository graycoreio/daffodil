import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffProductExtraProductFactories } from '@daffodil/product/testing';
import { DaffRelatedProductFactory } from '@daffodil/related-products/testing';

/**
 * Provides the related product fields to the product extension factory.
 */
export const provideDaffRelatedProductsTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductExtraProductFactories(DaffRelatedProductFactory),
]);
