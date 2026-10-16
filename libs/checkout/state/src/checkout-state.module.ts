import { NgModule } from '@angular/core';

import { provideCheckoutState } from './provider';

/**
 * The module for `@daffodil/checkout/state`.
 *
 * @deprecated Use {@link provideCheckoutState} instead.
 */
@NgModule({
  providers: [
    provideCheckoutState(),
  ],
})
export class DaffCheckoutStateModule {}
