import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentSummaryComponent } from './payment-summary.component';

import { DaffLinkModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffLinkModule
  ],
  declarations: [
    PaymentSummaryComponent
  ],
  exports: [
    PaymentSummaryComponent
  ]
})
export class PaymentSummaryModule { }
