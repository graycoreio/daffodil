import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffSearchIncrementalFacade,
  DaffSearchPageFacade,
} from '@daffodil/search/state';

import { MockDaffSearchFacade } from './mock-search-facade';

/**
 * Provides the {@link MockDaffSearchFacade} for {@link DaffSearchPageFacade} and {@link DaffSearchIncrementalFacade}.
 */
export const provideDaffSearchStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffSearchPageFacade, useExisting: MockDaffSearchFacade },
  { provide: DaffSearchIncrementalFacade, useExisting: MockDaffSearchFacade },
]);
