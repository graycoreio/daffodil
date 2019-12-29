import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateShippingModule } from './shipping/shipping.module';
import { DaffPaymentModule } from './payment/payment.module';
import { DaffBillingModule } from './billing/billing.module';
import { StateOrderModule } from './order/order.module';

@NgModule({
  imports: [
    CommonModule,
    StateShippingModule,
    DaffPaymentModule,
    DaffBillingModule,
    StateOrderModule
  ],
  exports: [
    StateShippingModule,
    DaffPaymentModule,
    DaffBillingModule,
    StateOrderModule
  ]
})
export class StateCheckoutModule { }
