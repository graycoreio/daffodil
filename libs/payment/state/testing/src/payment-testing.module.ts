import { NgModule } from '@angular/core';

import { provideDaffPaymentStateTesting } from './provider';

/**
 * Provides the {@link MockDaffPaymentPageFacade} for {@link DaffPaymentPageFacade}.
 *
 * @deprecated in favor of {@link provideDaffPaymentStateTesting}
 */
@NgModule({
  providers: [
    provideDaffPaymentStateTesting(),
  ],
})
export class DaffPaymentStateTestingModule {}
