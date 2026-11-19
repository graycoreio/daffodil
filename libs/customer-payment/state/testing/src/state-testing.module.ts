import { NgModule } from '@angular/core';

import { provideDaffCustomerPaymentStateTesting } from './provider';

/**
 * Provides the {@link MockDaffCustomerPaymentPageFacade} for {@link DaffCustomerPaymentPageFacade}.
 *
 * @deprecated in favor of {@link provideDaffCustomerPaymentStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffCustomerPaymentStateTesting(),
  ],
})
export class DaffCustomerPaymentStateTestingModule {}
