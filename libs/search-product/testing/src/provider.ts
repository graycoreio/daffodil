import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffSearchResultKindFactories } from '@daffodil/search/testing';

import { DaffSearchProductResultFactory } from './factories/public_api';

/**
 * Provides the default search result factory as a search result type factory.
 */
export const provideDaffSearchProductTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchResultKindFactories(DaffSearchProductResultFactory),
]);
