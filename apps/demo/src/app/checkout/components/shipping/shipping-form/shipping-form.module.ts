import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffButtonModule } from '@daffodil/design';

import { AddressFormModule } from '../../forms/address-form/address-form.module';
import { ShippingOptionsModule } from '../shipping-options/shipping-options.module';
import { ShippingFormComponent } from './shipping-form.component';

@NgModule({
  imports: [
    CommonModule,
    AddressFormModule,
    ShippingOptionsModule,
    ReactiveFormsModule,
    DaffButtonModule,
  ],
  declarations: [
    ShippingFormComponent,
  ],
  exports: [
    ShippingFormComponent,
  ],
})
export class ShippingFormModule { }
