import { NgModule } from '@angular/core';

import { provideDaffPaymentStateTesting } from './provider';

/**
 * Provides the {@link MockDaffPaymentPageFacade} for {@link DaffPaymentPageFacade}.
 *
 * @deprecated in favor of {@link provideDaffPaymentStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffPaymentStateTesting(),
  ],
})
export class DaffPaymentStateTestingModule {}
