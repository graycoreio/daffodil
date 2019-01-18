import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintOrderSummaryComponent } from './print-order-summary.component';

import { DaffButtonModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffButtonModule
  ],
  declarations: [
    PrintOrderSummaryComponent
  ],
  exports: [
    PrintOrderSummaryComponent
  ]
})
export class PrintOrderSummaryModule { }
