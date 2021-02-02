import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddressSummaryModule } from '../address-summary/address-summary.module';
import { BillingSummaryComponent } from './billing-summary.component';

@NgModule({
  imports: [
    CommonModule,
    AddressSummaryModule,
  ],
  declarations: [
    BillingSummaryComponent,
  ],
  exports: [
    BillingSummaryComponent,
  ],
})
export class BillingSummaryModule { }
