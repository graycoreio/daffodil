import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffProductExtraProductFactories } from '@daffodil/product/testing';

import { DaffReviewedProductFactory } from './factories/public_api';

/**
 * Provides the reviewed product as an extra product factory.
 */
export const provideDaffReviewsTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductExtraProductFactories(DaffReviewedProductFactory),
]);
