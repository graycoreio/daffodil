import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
import {
  DaffOrderCollectionFacade,
  DaffOrderFacade,
} from '@daffodil/order/state';

import { MockDaffOrderFacade } from './mock-order-facade';

/**
 * Provides {@link MockDaffOrderFacade} and {@link MockDaffCollectionFacade} in place of
 * {@link DaffOrderFacade} and {@link DaffOrderCollectionFacade}.
 */
export const provideDaffOrderStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffOrderFacade, useExisting: MockDaffOrderFacade },
  { provide: DaffOrderCollectionFacade, useExisting: MockDaffCollectionFacade },
]);
