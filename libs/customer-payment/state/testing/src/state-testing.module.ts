import { NgModule } from '@angular/core';

import { DaffCustomerPaymentPageFacade } from '@daffodil/customer-payment/state';

import { MockDaffCustomerPaymentPageFacade } from './mock-payment-facade';

/**
 * Provides the {@link MockDaffCustomerPaymentPageFacade} for {@link DaffCustomerPaymentPageFacade}.
 */
@NgModule({
  providers: [
    { provide: DaffCustomerPaymentPageFacade, useExisting: MockDaffCustomerPaymentPageFacade },
  ],
})
export class DaffCustomerPaymentStateTestingModule {}
