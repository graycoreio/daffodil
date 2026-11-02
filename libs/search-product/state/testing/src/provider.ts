import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
import {
  DaffSearchProductCollectionFacade,
  DaffSearchProductIncrementalFacade,
  DaffSearchProductPageFacade,
} from '@daffodil/search-product/state';

import { MockDaffSearchProductFacade } from './mock-search-facade';

/**
 * Provides the {@link MockDaffSearchProductFacade} for {@link DaffSearchProductPageFacade} and {@link DaffSearchProductIncrementalFacade},
 * and the {@link MockDaffCollectionFacade} for {@link DaffSearchProductCollectionFacade}.
 */
export const provideDaffSearchProductStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffSearchProductPageFacade, useExisting: MockDaffSearchProductFacade },
  { provide: DaffSearchProductIncrementalFacade, useExisting: MockDaffSearchProductFacade },
  { provide: DaffSearchProductCollectionFacade, useExisting: MockDaffCollectionFacade },
]);
