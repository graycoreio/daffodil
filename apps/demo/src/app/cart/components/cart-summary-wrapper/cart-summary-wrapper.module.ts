import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartSummaryWrapperComponent } from './cart-summary-wrapper.component';
import { CartSummaryModule } from '../cart-summary/cart-summary.module';
import { CartTotalsModule } from '../cart-totals/cart-totals.module';
import { DaffLoadingIconModule } from '@daffodil/design';
import { HelpBoxModule } from '../../../misc/help-box/help-box.module';

@NgModule({
  imports: [
    CommonModule,
    CartSummaryModule,
    CartTotalsModule,
    DaffLoadingIconModule,
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
