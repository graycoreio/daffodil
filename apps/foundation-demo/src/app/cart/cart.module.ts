import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateCartModule } from '@daffodil/state';

import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { DesignModule } from '../design/design.module';
import { MiscModule } from '../misc/misc.module';
import { LoadingIconModule } from '../core/loading-icon/loading-icon.module';
import { CartComponentModule } from './components/cart/cart-component.module';
import { CartAsyncWrapperModule } from './components/cart-async-wrapper/cart-async-wrapper.module';
import { CartGrandTotalModule } from './components/cart-grand-total/cart-grand-total.module';
import { CartItemModule } from './components/cart-item/cart-item.module';
import { CartSubtotalModule } from './components/cart-subtotal/cart-subtotal.module';
import { CartSummaryModule } from './components/cart-summary/cart-summary.module';
import { CheckoutCartModule } from './components/checkout-cart/checkout-cart.module';
import { ContinueShoppingModule } from './components/continue-shopping/continue-shopping.module';
import { ProceedToCheckoutModule } from './components/proceed-to-checkout/proceed-to-checkout.module';
import { PromotionModule } from './components/promotion/promotion.module';
import { CheckoutCartAsyncWrapperModule } from './components/checkout-cart-async-wrapper/checkout-cart-async-wrapper.module';
import { CheckoutCartItemModule } from './components/checkout-cart-item/checkout-cart-item.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    MiscModule,
    StateCartModule,
    LoadingIconModule,
    CartComponentModule,
    CartAsyncWrapperModule,
    CartGrandTotalModule,
    CartItemModule,
    CartSubtotalModule,
    CartSummaryModule,
    ContinueShoppingModule,
    ProceedToCheckoutModule,
    PromotionModule,
    CheckoutCartModule,
    CheckoutCartAsyncWrapperModule,
    CheckoutCartItemModule
  ],
  declarations: [
    CartViewComponent
  ],
  exports: [
    CartViewComponent
  ]
})
export class CartModule { }
