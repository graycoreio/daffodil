import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutCartComponent } from './checkout-cart.component';
import { CheckoutCartItemModule } from '../checkout-cart-item/checkout-cart-item.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutCartItemModule
  ],
  declarations: [
    CheckoutCartComponent
  ],
  exports: [
    CheckoutCartComponent
  ]
})
export class CheckoutCartModule { }
