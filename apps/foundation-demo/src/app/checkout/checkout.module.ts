import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutViewComponent } from './pages/checkout-view/checkout-view.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
