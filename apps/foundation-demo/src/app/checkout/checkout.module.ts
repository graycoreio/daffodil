import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateCheckoutModule } from '@daffodil/state';
import { StateCartModule } from '@daffodil/cart';
import { AccordionModule } from '@daffodil/design';

import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { FoundationCheckoutStateModule } from './checkout-state.module';
import { LoadingIconModule } from '../core/loading-icon/loading-icon.module';
import { CheckoutCartAsyncWrapperModule } from '../cart/components/checkout-cart-async-wrapper/checkout-cart-async-wrapper.module';
import { ShippingModule } from './components/shipping/shipping/shipping.module';
import { PaymentModule } from './components/payment/payment/payment.module';
import { ThankYouModule } from './components/thank-you/thank-you.module';
import { PlaceOrderModule } from './components/place-order/place-order.module';

@NgModule({
  imports: [
    CommonModule,
    StateCheckoutModule,
    StateCartModule,
    LoadingIconModule,
    FoundationCheckoutStateModule,
    CheckoutCartAsyncWrapperModule,
    ShippingModule,
    PaymentModule,
    ThankYouModule,
    PlaceOrderModule,

    AccordionModule
  ],
  declarations: [
    CheckoutViewComponent
  ],
  exports: [
    CheckoutViewComponent
  ]
})
export class CheckoutModule { }
