import { NgModule } from '@angular/core';

import { provideDaffPaymentTesting } from './provider';

/**
 * Provides the default payment result factory as a payment result type factory.
 *
 * @deprecated in favor of {@link provideDaffPaymentTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffPaymentTesting(),
  ],
})
export class DaffPaymentTestingModule { }
