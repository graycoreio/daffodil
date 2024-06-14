import { Injectable } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

import { DaffAuthorizeNetCreditCard } from '@daffodil/authorizenet';

import { PaymentInfoFormGroup } from '../models/payment-form.type';

@Injectable({
  providedIn: 'root',
})
export class PaymentInfoFormFactory {

  constructor(
    private fb: FormBuilder,
  ) {}

  create(paymentInfo: DaffAuthorizeNetCreditCard): PaymentInfoFormGroup {
    return this.fb.group({
      cardnumber: [paymentInfo ? paymentInfo.cardnumber : '', Validators.required],
      month: [paymentInfo ? paymentInfo.month : '', Validators.required],
      year: [paymentInfo ? paymentInfo.year : '', Validators.required],
      securitycode: [paymentInfo ? paymentInfo.securitycode : '', Validators.required],
    });
  }
}
