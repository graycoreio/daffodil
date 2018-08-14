import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { ShippingFormComponent } from './components/shipping/shipping-form/shipping-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StateCheckoutModule, StateCartModule } from '@daffodil/state';
import { ShippingSummaryComponent } from './components/shipping/shipping-summary/shipping-summary.component';
import { ShippingOptionsComponent } from './components/shipping/shipping-options/shipping-options.component';
import { ShippingComponent } from './components/shipping/shipping/shipping.component';
import { DesignModule } from '../design/design.module';
import { FoundationCheckoutStateModule } from './checkout-state.module';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { PaymentComponent } from './components/payment/payment/payment.component';
import { PaymentSummaryComponent } from './components/payment/payment-summary/payment-summary.component';
import { CartModule } from '../cart/cart.module';
import { AddressSummaryComponent } from './components/payment/address-summary/address-summary.component';
import { BillingSummaryComponent } from './components/payment/billing-summary/billing-summary.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StateCheckoutModule,
    DesignModule,
    FoundationCheckoutStateModule,
    CartModule,
    StateCartModule
  ],
  declarations: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingOptionsComponent,
    ShippingComponent,
    PaymentFormComponent,
    PaymentComponent,
    PaymentSummaryComponent,
    AddressSummaryComponent,
    BillingSummaryComponent,
    PlaceOrderComponent
  ],
  exports: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingOptionsComponent,
    ShippingComponent,
    PaymentFormComponent,
    PaymentComponent,
    PaymentSummaryComponent,
    AddressSummaryComponent,
    BillingSummaryComponent,
    PlaceOrderComponent
  ]
})
export class CheckoutModule { }
