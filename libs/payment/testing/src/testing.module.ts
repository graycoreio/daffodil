import { NgModule } from '@angular/core';

import { DaffPaymentResponseFactory } from './factories/public_api';
import { DAFF_PAYMENT_RESPONSE_KIND_FACTORIES } from './injection-tokens/public_api';

/**
 * Provides the default payment result factory as a payment result type factory.
 */
@NgModule({
  providers: [
    {
      provide: DAFF_PAYMENT_RESPONSE_KIND_FACTORIES,
      useExisting: DaffPaymentResponseFactory,
      multi: true,
    },
  ],
})
export class DaffPaymentTestingModule { }
