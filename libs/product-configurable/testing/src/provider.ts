import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffProductExtraFactoryTypes } from '@daffodil/product/testing';

import { DaffConfigurableProductFactory } from './factories/public_api';

/**
 * Provides the configurable product factory as a product type factory.
 */
export const provideDaffProductConfigurableTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductExtraFactoryTypes(DaffConfigurableProductFactory),
]);
