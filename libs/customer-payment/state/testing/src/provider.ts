import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffCustomerPaymentPageFacade } from '@daffodil/customer-payment/state';

import { MockDaffCustomerPaymentPageFacade } from './mock-payment-facade';

/**
 * Provides the {@link MockDaffCustomerPaymentPageFacade} for {@link DaffCustomerPaymentPageFacade}.
 */
export const provideDaffCustomerPaymentStateTesting = (): EnvironmentProviders => makeEnvironmentProviders([
  { provide: DaffCustomerPaymentPageFacade, useExisting: MockDaffCustomerPaymentPageFacade },
]);
