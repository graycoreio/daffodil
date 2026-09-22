import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffDefaultProductFactory } from './factories/public_api';
import { provideDaffProductExtraFactoryTypes } from './injection-tokens/public_api';

/**
 * Provides the default product factory as a product type factory.
 */
export const provideDaffProductTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductExtraFactoryTypes(DaffDefaultProductFactory),
]);
