import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreCheckoutModule } from '@daffodil/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCheckoutModule
  ],
  declarations: [
    CheckoutViewComponent,
    ShippingFormComponent
  ],
  exports: [
    CheckoutViewComponent,
    ShippingFormComponent
  ]
})
export class CheckoutModule { }
