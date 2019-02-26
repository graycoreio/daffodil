import { NgModule } from '@angular/core';

import { StateCartModule } from './cart/cart.module';
import { StateCheckoutModule } from './checkout/checkout.module';

@NgModule({
  imports: [
    StateCartModule,
    StateCheckoutModule
  ],
  exports: [
    StateCartModule,
    StateCheckoutModule
  ]
})
export class DaffodilStateModule {}
