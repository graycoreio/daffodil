import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { ShippingComponent } from './components/shipping/shipping.component';

@NgModule({
  imports: [
    CommonModule
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
