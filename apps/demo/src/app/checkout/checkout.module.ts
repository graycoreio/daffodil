import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateCartModule } from '@daffodil/cart';
import { StateCheckoutModule } from '@daffodil/checkout';
import {
  DaffAccordionModule,
  DaffLoadingIconModule,
  DaffContainerModule
} from '@daffodil/design';

import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { DemoCheckoutStateModule } from './checkout-state.module';
import { CartSummaryWrapperModule } from '../cart/components/cart-summary-wrapper/cart-summary-wrapper.module';
import { ShippingModule } from './components/shipping/shipping/shipping.module';
import { PaymentModule } from './components/payment/payment/payment.module';
import { PlaceOrderModule } from './components/place-order/place-order.module';

@NgModule({
  imports: [
    CommonModule,
    StateCheckoutModule,
    StateCartModule,
    DaffLoadingIconModule,
    DemoCheckoutStateModule,
    CartSummaryWrapperModule,
    ShippingModule,
    PaymentModule,
    PlaceOrderModule,

    DaffAccordionModule,
    DaffContainerModule
  ],
  declarations: [
    CheckoutViewComponent
  ],
  exports: [
    CheckoutViewComponent
  ]
})
export class CheckoutModule { }
