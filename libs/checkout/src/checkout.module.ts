import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffShippingModule } from './shipping/shipping.module';
import { DaffPaymentModule } from './payment/payment.module';
import { DaffBillingModule } from './billing/billing.module';
import { DaffOrderModule } from './order/order.module';

@NgModule({
  imports: [
    CommonModule,
    DaffShippingModule,
    DaffPaymentModule,
    DaffBillingModule,
		DaffOrderModule
  ],
  exports: [
		DaffShippingModule,
    DaffPaymentModule,
    DaffBillingModule,
		DaffOrderModule
  ]
})
export class StateCheckoutModule { }
