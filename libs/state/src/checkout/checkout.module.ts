import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateShippingModule } from './shipping/shipping.module';
import { StateBillingModule } from './billing/billing.module';
import { StatePaymentModule } from './payment/payment.module';

@NgModule({
  imports: [
    CommonModule,
    StateShippingModule,
    StateBillingModule,
    StatePaymentModule
  ],
  exports: [
    StateShippingModule,
    StateBillingModule,
    StatePaymentModule
  ]
})
export class StateCheckoutModule { }
