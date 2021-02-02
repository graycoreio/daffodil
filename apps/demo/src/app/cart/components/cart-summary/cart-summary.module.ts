import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MiniCartItemModule } from '../minicart-item/minicart-item.module';
import { CartSummaryComponent } from './cart-summary.component';

@NgModule({
  imports: [
    CommonModule,
    MiniCartItemModule,
  ],
  declarations: [
    CartSummaryComponent,
  ],
  exports: [
    CartSummaryComponent,
  ],
})
export class CartSummaryModule { }
