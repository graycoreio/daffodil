import { NgModule } from '@angular/core';

import { DaffCartStateModule } from '@daffodil/cart/state';
import { DaffOrderStateModule } from '@daffodil/order/state';

/**
 * The module for `@daffodil/checkout/state`.
 *
 * @deprecated in favor of {@link provideDaffCheckoutState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    DaffCartStateModule,
    DaffOrderStateModule,
  ],
})
export class DaffCheckoutStateModule {}
