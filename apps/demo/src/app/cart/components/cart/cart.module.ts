import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartSidebarModule } from '../cart-sidebar/cart-sidebar.module';
import { CartItemCountModule } from '../cart-item-count/cart-item-count.module';
import { CartItemsModule } from '../cart-items/cart-items.module';

@NgModule({
  imports: [
    CommonModule,
    CartItemsModule,
    CartSidebarModule,
    CartItemCountModule,
  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
