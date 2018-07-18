import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreCheckoutModule } from '@daffodil/core';
import { ShippingSummaryComponent } from './components/shipping-summary/shipping-summary.component';
import { ShippingOptionsComponent } from './components/shipping-options/shipping-options.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { DesignModule } from '../design/design.module';
import { FoundationCheckoutStateModule } from './checkout-state.module';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSummaryComponent } from './components/payment-summary/payment-summary.component';
import { CartModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreCheckoutModule,
    DesignModule,
    FoundationCheckoutStateModule,
    CartModule
  ],
  declarations: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingOptionsComponent,
    ShippingComponent,
    PaymentFormComponent,
    PaymentComponent,
    PaymentSummaryComponent
  ],
  exports: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingOptionsComponent,
    ShippingComponent,
    PaymentFormComponent,
    PaymentComponent,
    PaymentSummaryComponent
  ]
})
export class CheckoutModule { }
