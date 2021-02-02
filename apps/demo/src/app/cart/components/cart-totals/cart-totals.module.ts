import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartTotalsItemModule } from '../cart-totals-item/cart-totals-item.module';
import { CartTotalsComponent } from './cart-totals.component';

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
