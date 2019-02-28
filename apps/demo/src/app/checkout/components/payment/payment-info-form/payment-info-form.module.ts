import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PaymentInfoFormComponent } from './components/payment-info-form/payment-info-form.component';
import { DaffInputModule, DaffNativeSelectModule, DaffFormFieldModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffInputModule,
    DaffNativeSelectModule,
    DaffFormFieldModule
  ],
  declarations: [
    PaymentInfoFormComponent
  ],
  exports: [
    PaymentInfoFormComponent
  ]
})
export class PaymentInfoFormModule { }
