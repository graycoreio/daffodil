import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrintOrderSummaryModule } from '../print-order-summary/print-order-summary.module';
import { ThankYouComponent } from './thank-you.component';

@NgModule({
  imports: [
    CommonModule,
    PrintOrderSummaryModule,
  ],
  declarations: [
    ThankYouComponent,
  ],
  exports: [
    ThankYouComponent,
  ],
})
export class ThankYouComponentModule { }
