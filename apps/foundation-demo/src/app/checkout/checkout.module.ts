import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { ShippingComponent } from './components/shipping/shipping.component';
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
    ShippingComponent
  ],
  exports: [
    CheckoutViewComponent,
    ShippingComponent
  ]
})
export class CheckoutModule { }
