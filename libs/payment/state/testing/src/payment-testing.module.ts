import { NgModule } from '@angular/core';

import { DaffPaymentPageFacade } from '@daffodil/payment/state';

import { MockDaffPaymentPageFacade } from './mock-payment-facade';

/**
 * Provides the {@link MockDaffPaymentPageFacade} for {@link DaffPaymentPageFacade}.
 */
@NgModule({
  providers: [
    { provide: DaffPaymentPageFacade, useExisting: MockDaffPaymentPageFacade },
  ],
})
export class DaffPaymentStateTestingModule {}
