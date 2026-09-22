import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffProductExtraFactoryTypes } from '@daffodil/product/testing';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';

/**
 * Provides the configurable product factory to the product kind factory.
 */
export const provideDaffProductConfigurableTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductExtraFactoryTypes(DaffConfigurableProductFactory),
]);
