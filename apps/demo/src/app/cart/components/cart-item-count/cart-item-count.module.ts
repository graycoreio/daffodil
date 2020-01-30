import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemCountComponent } from './cart-item-count.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CartItemCountComponent
  ],
  exports: [
    CartItemCountComponent
  ]
})
export class CartItemCountModule { }
