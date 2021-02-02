import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartTotalsItemComponent } from './cart-totals-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CartTotalsItemComponent,
  ],
  exports: [
    CartTotalsItemComponent,
  ],
})
export class CartTotalsItemModule { }
