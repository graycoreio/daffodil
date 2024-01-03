import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffInputModule,
  DaffNativeSelectModule,
} from '@daffodil/design';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';

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
