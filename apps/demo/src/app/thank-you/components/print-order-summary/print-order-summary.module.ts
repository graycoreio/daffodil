import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';

import { PrintOrderSummaryComponent } from './print-order-summary.component';

@NgModule({
  imports: [
    CommonModule,
    DaffButtonModule,
  ],
  declarations: [
    PrintOrderSummaryComponent,
  ],
  exports: [
    PrintOrderSummaryComponent,
  ],
})
export class PrintOrderSummaryModule { }
