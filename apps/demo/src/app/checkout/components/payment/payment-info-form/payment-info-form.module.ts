import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffInputModule,
  DaffNativeSelectModule,
  DaffFormFieldModule,
} from '@daffodil/design';

import { PaymentInfoFormComponent } from './components/payment-info-form/payment-info-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffInputModule,
    DaffNativeSelectModule,
    DaffFormFieldModule,
  ],
  declarations: [
    PaymentInfoFormComponent,
  ],
  exports: [
    PaymentInfoFormComponent,
  ],
})
export class PaymentInfoFormModule { }
