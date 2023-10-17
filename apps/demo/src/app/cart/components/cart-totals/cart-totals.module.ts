import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartTotalsComponent } from './cart-totals.component';
import { CartTotalsItemModule } from '../cart-totals-item/cart-totals-item.module';

@NgModule({
  imports: [
    CommonModule,
    CartTotalsItemModule,
  ],
  declarations: [
    CartTotalsComponent,
  ],
  exports: [
    CartTotalsComponent,
  ],
})
export class CartTotalsModule { }
