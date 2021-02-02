import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddressSummaryModule } from '../../payment/address-summary/address-summary.module';
import { ShippingSummaryComponent } from './shipping-summary.component';

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
