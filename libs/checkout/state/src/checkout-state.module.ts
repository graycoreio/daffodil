import { NgModule } from '@angular/core';

import { DaffCartStateModule } from '@daffodil/cart/state';
import { DaffOrderStateModule } from '@daffodil/order/state';

/**
 * The module for `@daffodil/checkout/state`.
 *
 * @deprecated in favor of {@link provideDaffCheckoutState}
 */
@NgModule({
  imports: [
    DaffCartStateModule,
    DaffOrderStateModule,
  ],
})
export class DaffCheckoutStateModule {}
