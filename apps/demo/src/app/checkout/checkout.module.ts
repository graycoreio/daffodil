import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateCheckoutModule, StateCartModule } from '@daffodil/state';

import {
  DaffAccordionModule,
  DaffContainerModule
} from '@daffodil/design';

import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { FoundationCheckoutStateModule } from './checkout-state.module';

import { DaffLoadingIconModule } from '@daffodil/design';
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
