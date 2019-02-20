import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateShippingModule } from './shipping/shipping.module';
import { StateBillingModule } from './billing/billing.module';
import { StatePaymentModule } from './payment/payment.module';
import { StateOrderModule } from './order/order.module';

@NgModule({
  imports: [
    CommonModule,
    StateShippingModule,
    StateBillingModule,
    StatePaymentModule,
    StateOrderModule
  ],
  exports: [
    StateShippingModule,
    StateBillingModule,
    StatePaymentModule,
    StateOrderModule
  ]
})
export class StateCheckoutModule { }
