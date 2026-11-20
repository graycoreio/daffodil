import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffProductExtraFactoryTypes } from '@daffodil/product/testing';

import { DaffCompositeProductFactory } from './factories/public_api';

/**
 * Provides the composite product factory as a product type factory.
 */
export const provideDaffProductCompositeTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductExtraFactoryTypes(DaffCompositeProductFactory),
]);
