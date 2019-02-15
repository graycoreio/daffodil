import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PaymentInfoFormComponent } from './components/payment-info-form/payment-info-form.component';
import { DaffInputModule, DaffSelectModule, DaffFormFieldModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffInputModule,
    DaffSelectModule,
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
