import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreCartModule } from '@daffodil/core';

import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { CartComponent } from './components/cart/cart.component';
import { ProceedToCheckoutComponent } from './components/proceed-to-checkout/proceed-to-checkout.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { DesignModule } from '../design/design.module';
import { PromotionComponent } from './components/promotion/promotion.component';
import { CartSubtotalComponent } from './components/cart-subtotal/cart-subtotal.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartGrandTotalComponent } from './components/cart-grand-total/cart-grand-total.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    CoreCartModule,
  ],
  declarations: [
    CartViewComponent,
    CartComponent,
    ProceedToCheckoutComponent,
    CartItemComponent,
    PromotionComponent,
    CartSubtotalComponent,
    CartSummaryComponent,
    CartGrandTotalComponent
  ],
  exports: [
    CartViewComponent,
    CartComponent,
    ProceedToCheckoutComponent,
    CartItemComponent,
    PromotionComponent,
    CartSubtotalComponent,
    CartSummaryComponent,
    CartGrandTotalComponent    
  ]
})
export class CartModule { }
