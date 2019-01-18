import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateCheckoutModule, StateCartModule } from '@daffodil/state';

import {
  DaffAccordionModule,
  DaffContainerModule
} from '@daffodil/design';

import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { FoundationCheckoutStateModule } from './checkout-state.module';
import { LoadingIconModule } from '../core/loading-icon/loading-icon.module';
import { CartSummaryWrapperModule } from '../cart/components/cart-summary-wrapper/cart-summary-wrapper.module';
import { ShippingModule } from './components/shipping/shipping/shipping.module';
import { PaymentModule } from './components/payment/payment/payment.module';
import { PlaceOrderModule } from './components/place-order/place-order.module';

@NgModule({
  imports: [
    CommonModule,
    StateCheckoutModule,
    StateCartModule,
    LoadingIconModule,
    FoundationCheckoutStateModule,
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
