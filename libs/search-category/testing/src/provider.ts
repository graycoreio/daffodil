import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffSearchResultKindFactories } from '@daffodil/search/testing';

import { DaffSearchCategoryResultFactory } from './factories/public_api';

/**
 * Provides the default search result factory as a search result type factory.
 */
export const provideDaffSearchCategoryTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchResultKindFactories(DaffSearchCategoryResultFactory),
]);
