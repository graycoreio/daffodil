import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreCheckoutModule } from '@daffodil/core';
import { ShippingSummaryComponent } from './components/shipping-summary/shipping-summary.component';
import { ShippingOptionComponent } from './components/shipping-option/shipping-option.component';

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
    ShippingOptionComponent
  ],
  exports: [
    CheckoutViewComponent,
    ShippingFormComponent,
    ShippingSummaryComponent,
    ShippingOptionComponent
  ]
})
export class CheckoutModule { }
