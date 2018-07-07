import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreCheckoutModule } from '@daffodil/core';
import { ShippingSummaryComponent } from './components/shipping-summary/shipping-summary.component';
import { ShippingOptionComponent } from './components/shipping-option/shipping-option.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ShippingAsyncWrapperComponent } from './components/shipping-async-wrapper/shipping-async-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCheckoutModule
  ],
  declarations: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingOptionComponent,
    ShippingComponent,
    ShippingAsyncWrapperComponent
  ],
  exports: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingOptionComponent,
    ShippingComponent,
    ShippingAsyncWrapperComponent
  ]
})
export class CheckoutModule { }
