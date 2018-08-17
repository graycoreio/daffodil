import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateShippingModule } from './shipping/shipping.module';
import { StatePaymentModule } from './payment/payment.module';
import { StateBillingModule } from './billing/billing.module';

@NgModule({
  imports: [
    CommonModule,
    StateShippingModule,
    StatePaymentModule,
    StateBillingModule
  ],
  exports: [
    StateShippingModule,
    StatePaymentModule,
    StateBillingModule
  ]
})
export class StateCheckoutModule { }
