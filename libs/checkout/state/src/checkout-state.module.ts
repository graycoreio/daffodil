import { NgModule } from '@angular/core';

import { DaffCartStateModule } from '@daffodil/cart/state';
import { DaffOrderStateModule } from '@daffodil/order/state';


@NgModule({
  imports: [
    DaffCartStateModule,
    DaffOrderStateModule,
  ],
})
export class DaffCheckoutStateModule {}
