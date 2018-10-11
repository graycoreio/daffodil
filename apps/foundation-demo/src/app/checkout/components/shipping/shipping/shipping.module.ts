import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingComponent } from './shipping.component';
import { ShippingFormModule } from '../shipping-form/shipping-form.module';
import { ShippingSummaryModule } from '../shipping-summary/shipping-summary.module';

@NgModule({
  imports: [
    CommonModule,
    ShippingFormModule,
    ShippingSummaryModule
  ],
  declarations: [
    ShippingComponent
  ],
  exports: [
    ShippingComponent
  ]
})
export class ShippingModule { }
