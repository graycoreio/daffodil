import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemModule } from '../cart-item/cart-item.module';

@NgModule({
  imports: [
    CommonModule,
    CartItemModule
  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
