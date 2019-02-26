import { NgModule } from '@angular/core';

import { StateCheckoutModule } from './checkout/checkout.module';

@NgModule({
  imports: [
    StateCheckoutModule
  ],
  exports: [
    StateCheckoutModule
  ]
})
export class DaffodilStateModule {}
