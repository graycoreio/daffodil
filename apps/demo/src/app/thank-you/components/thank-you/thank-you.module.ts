import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankYouComponent } from './thank-you.component';
import { PrintOrderSummaryModule } from '../print-order-summary/print-order-summary.module';

@NgModule({
  imports: [
    CommonModule,
    PrintOrderSummaryModule
  ],
  declarations: [
    ThankYouComponent
  ],
  exports: [
    ThankYouComponent
  ]
})
export class ThankYouComponentModule { }
