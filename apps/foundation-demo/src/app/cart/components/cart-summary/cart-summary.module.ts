import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary.component';
import { CartSubtotalModule } from '../cart-subtotal/cart-subtotal.module';
import { CartGrandTotalModule } from '../cart-grand-total/cart-grand-total.module';

@NgModule({
  imports: [
    CommonModule,
    CartSubtotalModule,
    CartGrandTotalModule
  ],
  declarations: [
    CartSummaryComponent
  ],
  exports: [
    CartSummaryComponent
  ]
})
export class CartSummaryModule { }
