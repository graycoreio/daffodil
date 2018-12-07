import { NgModule } from '@angular/core';

import { StateCartModule } from './cart/cart.module';

@NgModule({
  imports: [
    StateCartModule
  ],
  exports: [
    StateCartModule
  ]
})
export class DaffodilCartStateModule {}
