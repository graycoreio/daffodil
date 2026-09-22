import { NgModule } from '@angular/core';

import { provideDaffCustomerPaymentStateTesting } from './provider';

/**
 * Provides the {@link MockDaffCustomerPaymentPageFacade} for {@link DaffCustomerPaymentPageFacade}.
 *
 * @deprecated in favor of {@link provideDaffCustomerPaymentStateTesting}
 */
@NgModule({
  providers: [
    provideDaffCustomerPaymentStateTesting(),
  ],
})
export class DaffCustomerPaymentStateTestingModule {}
