import { NgModule } from '@angular/core';

import { DaffCartStateModule } from '@daffodil/cart/state';
import { DaffOrderStateModule } from '@daffodil/order/state';

/**
 * The module for `@daffodil/checkout/state`.
 */
@NgModule({
  imports: [
    DaffCartStateModule,
    DaffOrderStateModule,
  ],
})
export class DaffCheckoutStateModule {}
