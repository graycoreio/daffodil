import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateCartModule } from '@daffodil/state';

import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { CartComponent } from './components/cart/cart.component';
import { ProceedToCheckoutComponent } from './components/proceed-to-checkout/proceed-to-checkout.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { DesignModule } from '../design/design.module';
import { PromotionComponent } from './components/promotion/promotion.component';
import { CartSubtotalComponent } from './components/cart-subtotal/cart-subtotal.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartGrandTotalComponent } from './components/cart-grand-total/cart-grand-total.component';
import { CartAsyncWrapperComponent } from './components/cart-async-wrapper/cart-async-wrapper.component';
import { ContinueShoppingComponent } from './components/continue-shopping/continue-shopping.component';
import { CheckoutCartAsyncWrapperComponent } from './components/checkout-cart-async-wrapper/checkout-cart-async-wrapper.component';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { CheckoutCartItemComponent } from './components/checkout-cart-item/checkout-cart-item.component';
import { MiscModule } from '../misc/misc.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    MiscModule,
    StateCartModule
  ],
  declarations: [
    CartViewComponent,
    CartComponent,
    ProceedToCheckoutComponent,
    CartItemComponent,
    PromotionComponent,
    CartSubtotalComponent,
    CartSummaryComponent,
    CartGrandTotalComponent,
    CartAsyncWrapperComponent,
    ContinueShoppingComponent,
    CheckoutCartAsyncWrapperComponent,
    CheckoutCartComponent,
    CheckoutCartItemComponent
  ],
  exports: [
    CartViewComponent,
    CartComponent,
    ProceedToCheckoutComponent,
    CartItemComponent,
    PromotionComponent,
    CartSubtotalComponent,
    CartSummaryComponent,
    CartGrandTotalComponent,
    CartAsyncWrapperComponent,
    ContinueShoppingComponent,
    CheckoutCartAsyncWrapperComponent,
    CheckoutCartComponent,
    CheckoutCartItemComponent
  ]
})
export class CartModule { }
