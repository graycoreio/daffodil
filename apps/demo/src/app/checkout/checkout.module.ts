import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCartStateModule } from '@daffodil/cart/state';
import { StateCheckoutModule } from '@daffodil/checkout';
import {
  DaffAccordionModule,
  DaffLoadingIconModule,
  DaffContainerModule,
} from '@daffodil/design';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { DemoCheckoutStateModule } from './checkout-state.module';
import { PaymentModule } from './components/payment/payment/payment.module';
import { PlaceOrderModule } from './components/place-order/place-order.module';
import { ShippingModule } from './components/shipping/shipping/shipping.module';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { CartSummaryWrapperModule } from '../cart/components/cart-summary-wrapper/cart-summary-wrapper.module';

@NgModule({
  imports: [
    CommonModule,
    StateCheckoutModule,
    DaffCartStateModule,
    DaffLoadingIconModule,
    DemoCheckoutStateModule,
    CartSummaryWrapperModule,
    ShippingModule,
    PaymentModule,
    PlaceOrderModule,
    DaffAccordionModule,
    DaffContainerModule,
    CheckoutRoutingModule,
  ],
  declarations: [
    CheckoutViewComponent,
  ],
  exports: [
    CheckoutViewComponent,
  ],
})
export class CheckoutModule { }
