import { NgModule } from '@angular/core';

import { provideDaffCheckoutState } from './provider';

/**
 * The module for `@daffodil/checkout/state`.
 *
 * @deprecated in favor of {@link provideDaffCheckoutState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffCheckoutState(),
  ],
})
export class DaffCheckoutStateModule {}
