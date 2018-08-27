import { NgModule, ModuleWithProviders } from '@angular/core';

import { StateProductModule } from './product/product.module';
import { StateCartModule } from './cart/cart.module';
import { StateCheckoutModule } from './checkout/checkout.module';

@NgModule({
  imports: [
    StateProductModule,
    StateCartModule,
    StateCheckoutModule
  ],
  exports: [
    StateProductModule,
    StateCartModule,
    StateCheckoutModule
  ]
})
export class DaffodilStateModule {

}
