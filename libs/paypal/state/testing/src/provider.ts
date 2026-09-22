import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffPaypalFacade } from '@daffodil/paypal/state';

import { MockDaffPaypalFacade } from './mock-paypal-facade';

/**
 * Provides the {@link MockDaffPaypalFacade} for {@link DaffPaypalFacade}.
 */
export const provideDaffPaypalStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffPaypalFacade, useExisting: MockDaffPaypalFacade },
]);
