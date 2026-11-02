import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DaffProductFacade,
  DaffProductGridFacade,
  DaffProductPageFacade,
} from '@daffodil/product/state';

import { MockDaffProductFacade } from './mock-product-facade';
import { MockDaffProductGridFacade } from './mock-product-grid-facade';
import { MockDaffProductPageFacade } from './mock-product-page-facade';

/**
 * Provides the mock product facades in place of the real ones.
 */
export const provideDaffProductStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffProductFacade, useExisting: MockDaffProductFacade },
  { provide: DaffProductGridFacade, useExisting: MockDaffProductGridFacade },
  { provide: DaffProductPageFacade, useExisting: MockDaffProductPageFacade },
]);
