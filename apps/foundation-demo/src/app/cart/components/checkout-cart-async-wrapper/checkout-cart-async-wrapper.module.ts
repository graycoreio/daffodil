import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutCartAsyncWrapperComponent } from './checkout-cart-async-wrapper.component';
import { CheckoutCartModule } from '../checkout-cart/checkout-cart.module';
import { CartSummaryModule } from '../cart-summary/cart-summary.module';
import { MiscModule } from '../../../misc/misc.module';
import { LoadingIconModule } from '../../../core/loading-icon/loading-icon.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutCartModule,
    CartSummaryModule,
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
