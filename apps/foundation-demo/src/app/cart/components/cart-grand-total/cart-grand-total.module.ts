import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartGrandTotalComponent } from './cart-grand-total.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartGrandTotalComponent
  ],
  exports: [
    CartGrandTotalComponent
  ]
})
export class CartGrandTotalModule { }
