import { NgModule } from '@angular/core';

import { provideDaffPaymentTesting } from './provider';

/**
 * Provides the default payment result factory as a payment result type factory.
 *
 * @deprecated in favor of {@link provideDaffPaymentTesting}
 */
@NgModule({
  providers: [
    provideDaffPaymentTesting(),
  ],
})
export class DaffPaymentTestingModule { }
