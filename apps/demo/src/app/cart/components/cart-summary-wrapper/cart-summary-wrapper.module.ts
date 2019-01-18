import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartSummaryWrapperComponent } from './cart-summary-wrapper.component';
import { CartSummaryModule } from '../cart-summary/cart-summary.module';
import { CartTotalsModule } from '../cart-totals/cart-totals.module';
import { LoadingIconModule } from '../../../core/loading-icon/loading-icon.module';
import { HelpBoxModule } from '../../../misc/help-box/help-box.module';

@NgModule({
  imports: [
    CommonModule,
    CartSummaryModule,
    CartTotalsModule,
    LoadingIconModule,
    HelpBoxModule
  ],
  declarations: [
    CartSummaryWrapperComponent
  ],
  exports: [
    CartSummaryWrapperComponent
  ]
})
export class CartSummaryWrapperModule { }
