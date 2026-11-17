import { NgModule } from '@angular/core';

import { provideDaffCheckoutState } from './provider';

/**
 * The module for `@daffodil/checkout/state`.
 *
 * @deprecated in favor of {@link provideDaffCheckoutState}
 */
@NgModule({
  providers: [
    provideDaffCheckoutState(),
  ],
})
export class DaffCheckoutStateModule {}
