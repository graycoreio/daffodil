import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateShippingModule } from './shipping/shipping.module';
import { StateBillingModule } from './billing/billing.module';
import { DaffPaymentModule } from './payment/payment.module';
import { StateOrderModule } from './order/order.module';

@NgModule({
  imports: [
    CommonModule,
    StateShippingModule,
    StateBillingModule,
    DaffPaymentModule,
    StateOrderModule
  ],
  exports: [
    StateShippingModule,
    StateBillingModule,
    DaffPaymentModule,
    StateOrderModule
  ]
})
export class StateCheckoutModule { }
