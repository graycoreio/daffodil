import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffInputModule,
  DaffNativeSelectModule,
  DaffButtonModule
} from '@daffodil/design';

import { PaymentFormComponent } from './payment-form.component';
import { AddressFormModule } from '../../forms/address-form/address-form.module';
import { PaymentInfoFormModule } from '../payment-info-form/payment-info-form.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffInputModule,
    DaffNativeSelectModule,
    AddressFormModule,
    PaymentInfoFormModule,
    DaffButtonModule
  ],
  declarations: [
    PaymentFormComponent
  ],
  exports: [
    PaymentFormComponent
  ]
})
export class PaymentFormModule { }
