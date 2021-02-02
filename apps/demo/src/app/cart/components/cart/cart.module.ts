import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartItemCountModule } from '../cart-item-count/cart-item-count.module';
import { CartItemsModule } from '../cart-items/cart-items.module';
import { CartSidebarModule } from '../cart-sidebar/cart-sidebar.module';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    CartItemsModule,
    CartSidebarModule,
    CartItemCountModule,
  ],
  declarations: [
    CartComponent,
  ],
  exports: [
    CartComponent,
  ],
})
export class CartModule { }
