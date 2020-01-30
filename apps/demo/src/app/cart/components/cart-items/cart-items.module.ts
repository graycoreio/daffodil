import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items.component';
import { CartItemModule } from '../cart-item/cart-item.module';

@NgModule({
  imports: [
    CommonModule,
    CartItemModule
  ],
  declarations: [
    CartItemsComponent
  ],
  exports: [
    CartItemsComponent
  ]
})
export class CartItemsModule { }
