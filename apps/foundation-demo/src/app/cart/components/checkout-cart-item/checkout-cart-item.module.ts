import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutCartItemComponent } from './checkout-cart-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckoutCartItemComponent
  ],
  exports: [
    CheckoutCartItemComponent
  ]
})
export class CheckoutCartItemModule { }
