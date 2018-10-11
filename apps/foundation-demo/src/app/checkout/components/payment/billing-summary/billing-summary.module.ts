import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingSummaryComponent } from './billing-summary.component';
import { AddressSummaryModule } from '../address-summary/address-summary.module';

@NgModule({
  imports: [
    CommonModule,
    AddressSummaryModule
  ],
  declarations: [
    BillingSummaryComponent
  ],
  exports: [
    BillingSummaryComponent
  ]
})
export class BillingSummaryModule { }
