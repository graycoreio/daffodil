import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffInputValidatorModule, DaffSelectValidatorModule } from '@daffodil/design';

import { PaymentFormComponent } from './payment-form.component';
import { PromotionModule } from '../../../../cart/components/promotion/promotion.module';
import { AddressFormModule } from '../../forms/address-form/address-form.module';
import { PaymentInfoFormModule } from '../payment-info-form/payment-info-form.module';

@NgModule({
  imports: [
    CommonModule,
    PromotionModule,
    ReactiveFormsModule,
    DaffInputValidatorModule,
    DaffSelectValidatorModule,
    AddressFormModule,
    PaymentInfoFormModule
  ],
  declarations: [
    PaymentFormComponent
  ],
  exports: [
    PaymentFormComponent
  ]
})
export class PaymentFormModule { }
