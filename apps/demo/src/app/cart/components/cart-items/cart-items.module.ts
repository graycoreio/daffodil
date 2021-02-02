import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartItemModule } from '../cart-item/cart-item.module';
import { CartItemsComponent } from './cart-items.component';

@NgModule({
  imports: [
    CommonModule,
    CartItemModule,
  ],
  declarations: [
    CartItemsComponent,
  ],
  exports: [
    CartItemsComponent,
  ],
})
export class CartItemsModule { }
