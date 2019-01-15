import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintOrderSummaryComponent } from './print-order-summary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrintOrderSummaryComponent
  ],
  exports: [
    PrintOrderSummaryComponent
  ]
})
export class PrintOrderSummaryModule { }
