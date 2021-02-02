import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShippingFormModule } from '../shipping-form/shipping-form.module';
import { ShippingSummaryModule } from '../shipping-summary/shipping-summary.module';
import { ShippingComponent } from './shipping.component';

@NgModule({
  imports: [
    CommonModule,
    ShippingFormModule,
    ShippingSummaryModule,
  ],
  declarations: [
    ShippingComponent,
  ],
  exports: [
    ShippingComponent,
  ],
})
export class ShippingModule { }
