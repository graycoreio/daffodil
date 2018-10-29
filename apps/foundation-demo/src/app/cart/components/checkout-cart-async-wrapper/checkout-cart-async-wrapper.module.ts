import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutCartAsyncWrapperComponent } from './checkout-cart-async-wrapper.component';
import { CheckoutCartModule } from '../checkout-cart/checkout-cart.module';
import { CartTotalsModule } from '../cart-totals/cart-totals.module';
import { MiscModule } from '../../../misc/misc.module';
import { LoadingIconModule } from '../../../core/loading-icon/loading-icon.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutCartModule,
    CartTotalsModule,
    MiscModule,
    LoadingIconModule
  ],
  declarations: [
    CheckoutCartAsyncWrapperComponent
  ],
  exports: [
    CheckoutCartAsyncWrapperComponent
  ]
})
export class CheckoutCartAsyncWrapperModule { }
