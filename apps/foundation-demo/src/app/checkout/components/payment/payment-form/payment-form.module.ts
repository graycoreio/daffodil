import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffInputValidatorModule, DaffSelectValidatorModule } from '@daffodil/design';

import { PaymentFormComponent } from './payment-form.component';
import { PromotionModule } from 'apps/foundation-demo/src/app/cart/components/promotion/promotion.module';

@NgModule({
  imports: [
    CommonModule,
    PromotionModule,
    ReactiveFormsModule,
    DaffInputValidatorModule,
    DaffSelectValidatorModule,
  ],
  declarations: [
    PaymentFormComponent
  ],
  exports: [
    PaymentFormComponent
  ]
})
export class PaymentFormModule { }
