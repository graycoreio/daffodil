import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutCartAsyncWrapperComponent } from './checkout-cart-async-wrapper.component';
import { CheckoutCartModule } from '../checkout-cart/checkout-cart.module';
import { CartTotalsModule } from '../cart-totals/cart-totals.module';
import { LoadingIconModule } from '../../../core/loading-icon/loading-icon.module';
import { HelpBoxModule } from '../../../misc/help-box/help-box.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutCartModule,
    CartTotalsModule,
    LoadingIconModule,
    HelpBoxModule
  ],
  declarations: [
    CheckoutCartAsyncWrapperComponent
  ],
  exports: [
    CheckoutCartAsyncWrapperComponent
  ]
})
export class CheckoutCartAsyncWrapperModule { }
