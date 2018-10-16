import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffQtyDropdownModule } from '@daffodil/design';

import { CartItemComponent } from './cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    DaffQtyDropdownModule
  ],
  declarations: [
    CartItemComponent
  ],
  exports: [
    CartItemComponent
  ]
})
export class CartItemModule { }
