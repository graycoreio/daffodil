import { Injectable } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PaymentInfoFormFactory {

  constructor(
    private fb: UntypedFormBuilder,
  ) {}

  create(paymentInfo): UntypedFormGroup {
    return this.fb.group({
      name: [paymentInfo ? paymentInfo.name : '', Validators.required],
      cardnumber: [paymentInfo ? paymentInfo.cardnumber : '', Validators.required],
      month: [paymentInfo ? paymentInfo.month : '', Validators.required],
      year: [paymentInfo ? paymentInfo.year : '', Validators.required],
      securitycode: [paymentInfo ? paymentInfo.securitycode : '', Validators.required],
    });
  }
}
