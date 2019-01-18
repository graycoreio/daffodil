import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary.component';
import { MiniCartItemModule } from '../minicart-item/minicart-item.module';

@NgModule({
  imports: [
    CommonModule,
    MiniCartItemModule
  ],
  declarations: [
    CartSummaryComponent
  ],
  exports: [
    CartSummaryComponent
  ]
})
export class CartSummaryModule { }
