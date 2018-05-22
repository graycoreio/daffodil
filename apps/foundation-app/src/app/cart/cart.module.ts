import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreCartModule } from '@daffodil/core';

import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { CartComponent } from './components/cart/cart.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { ProceedToCheckoutComponent } from './components/proceed-to-checkout/proceed-to-checkout.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { DesignModule } from '../design/design.module';
import { PromotionComponent } from './components/promotion/promotion.component';
import { CartSubtotalComponent } from './components/cart-subtotal/cart-subtotal.component';
import { CartShippingComponent } from './components/cart-shipping/cart-shipping.component';
import { CartTaxComponent } from './components/cart-tax/cart-tax.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    CoreCartModule,
  ],
  declarations: [
    CartViewComponent,
    CartComponent,
    CartTotalComponent,
    ProceedToCheckoutComponent,
    CartItemComponent,
    PromotionComponent,
    CartSubtotalComponent,
    CartShippingComponent,
    CartTaxComponent,
    CartSummaryComponent
  ],
  exports: [
    CartViewComponent,
    CartComponent,
    CartTotalComponent,
    ProceedToCheckoutComponent,
    CartItemComponent,
    PromotionComponent,
    CartSubtotalComponent,
    CartShippingComponent,
    CartTaxComponent,
    CartSummaryComponent
  ]
})
export class CartModule { }
