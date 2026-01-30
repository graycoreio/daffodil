import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

import { CartSummaryWrapperComponent } from './cart-summary-wrapper.component';
import { HelpBoxComponent } from '../../../misc/help-box/help-box.component';
import { CartSummaryModule } from '../cart-summary/cart-summary.module';
import { CartTotalsModule } from '../cart-totals/cart-totals.module';

@NgModule({
  imports: [
    CommonModule,
    CartSummaryModule,
    CartTotalsModule,
    DaffLoadingIconModule,
    HelpBoxComponent,
  ],
  declarations: [
    CartSummaryWrapperComponent,
  ],
  exports: [
    CartSummaryWrapperComponent,
  ],
})
export class CartSummaryWrapperModule { }
