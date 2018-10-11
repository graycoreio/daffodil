import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentFormComponent } from './payment-form.component';
import { DesignModule } from 'apps/foundation-demo/src/app/design/design.module';
import { PromotionModule } from 'apps/foundation-demo/src/app/cart/components/promotion/promotion.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    PromotionModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaymentFormComponent
  ],
  exports: [
    PaymentFormComponent
  ]
})
export class PaymentFormModule { }
