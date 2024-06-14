import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCartStateModule } from '@daffodil/cart/state';
import { DaffAccordionModule } from '@daffodil/design/accordion';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { DemoCheckoutStateModule } from './checkout-state.module';
import { PlaceOrderModule } from './components/place-order/place-order.module';
import { CartSummaryWrapperModule } from '../cart/components/cart-summary-wrapper/cart-summary-wrapper.module';

@NgModule({
  imports: [
    CommonModule,
    DaffCartStateModule,
    DaffLoadingIconModule,
    DemoCheckoutStateModule,
    CartSummaryWrapperModule,
    PlaceOrderModule,
    DaffAccordionModule,
    DaffContainerModule,
    CheckoutRoutingModule,
  ],
})
export class CheckoutModule { }
