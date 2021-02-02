import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffQtyDropdownModule } from '@daffodil/design';

import { CartItemComponent } from './cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    DaffQtyDropdownModule,
  ],
  declarations: [
    CartItemComponent,
  ],
  exports: [
    CartItemComponent,
  ],
})
export class CartItemModule { }
