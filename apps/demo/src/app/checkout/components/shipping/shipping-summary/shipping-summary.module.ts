import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShippingSummaryComponent } from './shipping-summary.component';
import { AddressSummaryModule } from '../../payment/address-summary/address-summary.module';

@NgModule({
  imports: [
    CommonModule,
    AddressSummaryModule,
  ],
  declarations: [
    ShippingSummaryComponent,
  ],
  exports: [
    ShippingSummaryComponent,
  ],
})
export class ShippingSummaryModule { }
