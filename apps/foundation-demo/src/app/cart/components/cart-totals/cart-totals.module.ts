import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartTotalsComponent } from './cart-totals.component';
import { CartSubtotalModule } from '../cart-subtotal/cart-subtotal.module';
import { CartGrandTotalModule } from '../cart-grand-total/cart-grand-total.module';

@NgModule({
  imports: [
    CommonModule,
    CartSubtotalModule,
    CartGrandTotalModule
  ],
  declarations: [
    CartTotalsComponent
  ],
  exports: [
    CartTotalsComponent
  ]
})
export class CartTotalsModule { }
