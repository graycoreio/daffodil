import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffCartFacade } from '@daffodil/cart/state';

import { MockDaffCartFacade } from './mock-cart-facade';

/**
 * Provides {@link MockDaffCartFacade} in place of {@link DaffCartFacade}.
 */
export const provideDaffCartStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffCartFacade, useExisting: MockDaffCartFacade },
]);
