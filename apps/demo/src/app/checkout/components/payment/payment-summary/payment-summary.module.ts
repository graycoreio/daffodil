import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaymentSummaryComponent } from './payment-summary.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PaymentSummaryComponent,
  ],
  exports: [
    PaymentSummaryComponent,
  ],
})
export class PaymentSummaryModule { }
