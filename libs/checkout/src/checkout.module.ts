import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffBillingModule } from './billing/billing.module';
import { DaffOrderModule } from './order/order.module';
import { DaffPaymentModule } from './payment/payment.module';
import { DaffShippingModule } from './shipping/shipping.module';

@NgModule({
  imports: [
    CommonModule,
    DaffShippingModule,
    DaffPaymentModule,
    DaffBillingModule,
    DaffOrderModule,
  ],
  exports: [
    DaffShippingModule,
    DaffPaymentModule,
    DaffBillingModule,
    DaffOrderModule,
  ],
})
export class StateCheckoutModule { }
