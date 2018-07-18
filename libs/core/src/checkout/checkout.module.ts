import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreShippingModule } from './shipping/shipping.module';
import { CorePaymentModule } from './payment/payment.module';

@NgModule({
  imports: [
    CommonModule,
    CoreShippingModule,
    CorePaymentModule
  ],
  exports: [
    CoreShippingModule,
    CorePaymentModule
  ]
})
export class CoreCheckoutModule { }
