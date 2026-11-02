import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffSearchResultKindFactories } from '@daffodil/search/testing';
import { DaffSearchCategoryResultFactory } from '@daffodil/search-category/testing';

/**
 * Provides the category search result factory as a search result kind factory.
 */
export const provideDaffSearchCategoryTestingDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchResultKindFactories(DaffSearchCategoryResultFactory),
]);
