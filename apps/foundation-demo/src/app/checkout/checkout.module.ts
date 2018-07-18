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

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreCheckoutModule,
    DesignModule,
    FoundationCheckoutStateModule
  ],
  declarations: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingOptionsComponent,
    ShippingComponent
  ],
  exports: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingOptionsComponent,
    ShippingComponent
  ]
})
export class CheckoutModule { }
