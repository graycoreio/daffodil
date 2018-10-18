import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartWrapperComponent } from './cart-wrapper.component';
import { PromotionModule } from '../promotion/promotion.module';
import { CartSummaryModule } from '../cart-summary/cart-summary.module';
import { ProceedToCheckoutModule } from '../proceed-to-checkout/proceed-to-checkout.module';
import { ContinueShoppingModule } from '../continue-shopping/continue-shopping.module';
import { MiscModule } from '../../../misc/misc.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    CartModule,
    PromotionModule,
    CartSummaryModule,
    ProceedToCheckoutModule,
    ContinueShoppingModule,
    MiscModule
  ],
  declarations: [
    CartWrapperComponent
  ],
  exports: [
    CartWrapperComponent
  ]
})
export class CartWrapperModule { }
