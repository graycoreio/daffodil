import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffPaymentPageFacade } from '@daffodil/payment/state';

import { MockDaffPaymentPageFacade } from './mock-payment-facade';

/**
 * Provides the {@link MockDaffPaymentPageFacade} for {@link DaffPaymentPageFacade}.
 */
export const provideDaffPaymentStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffPaymentPageFacade, useExisting: MockDaffPaymentPageFacade },
]);
