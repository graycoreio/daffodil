import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffProductExtraFactoryTypes } from '@daffodil/product/testing';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';

/**
 * Provides the composite product factory to the product kind factory.
 */
export const provideDaffProductCompositeInMemoryDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductExtraFactoryTypes(DaffCompositeProductFactory),
]);
