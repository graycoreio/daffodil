import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartWrapperComponent } from './cart-wrapper.component';
import { PromotionModule } from '../promotion/promotion.module';
import { CartTotalsModule } from '../cart-totals/cart-totals.module';
import { ProceedToCheckoutModule } from '../proceed-to-checkout/proceed-to-checkout.module';
import { ContinueShoppingModule } from '../continue-shopping/continue-shopping.module';
import { MiscModule } from '../../../misc/misc.module';
import { CartModule } from '../cart/cart.module';
import { DaffButtonModule, DaffButtonSetModule } from '@daffodil/design';


@NgModule({
  imports: [
    CommonModule,
    CartModule,
    PromotionModule,
    CartTotalsModule,
    ProceedToCheckoutModule,
    ContinueShoppingModule,
    MiscModule,
    DaffButtonModule,
    DaffButtonSetModule
  ],
  declarations: [
    CartWrapperComponent
  ],
  exports: [
    CartWrapperComponent
  ]
})
export class CartWrapperModule { }
