import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentComponent } from './payment.component';
import { PaymentFormModule } from '../payment-form/payment-form.module';
import { PaymentSummaryModule } from '../payment-summary/payment-summary.module';
import { BillingSummaryModule } from '../billing-summary/billing-summary.module';

@NgModule({
  imports: [
    CommonModule,
    PaymentFormModule,
    PaymentSummaryModule,
    BillingSummaryModule
  ],
  declarations: [
    PaymentComponent
  ],
  exports: [
    PaymentComponent
  ]
})
export class PaymentModule { }
