import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateShippingModule } from './shipping/shipping.module';
import { StatePaymentModule } from './payment/payment.module';

@NgModule({
  imports: [
    CommonModule,
    StateShippingModule,
    StatePaymentModule
  ],
  exports: [
    StateShippingModule,
    StatePaymentModule
  ]
})
export class StateCheckoutModule { }
