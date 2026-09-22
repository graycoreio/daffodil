import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffSearchResultKindFactories } from '@daffodil/search/testing';
import { DaffSearchProductResultFactory } from '@daffodil/search-product/testing';

/**
 * Provides the product search result factory as a search result kind factory.
 */
export const provideDaffSearchProductTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchResultKindFactories(DaffSearchProductResultFactory),
]);
