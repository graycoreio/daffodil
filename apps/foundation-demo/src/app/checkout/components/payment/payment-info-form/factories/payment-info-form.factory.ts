import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoFormFactory {

  constructor(
    private fb: FormBuilder
  ) {}
  
  create(paymentInfo) : FormGroup {
    return this.fb.group({
      name: [paymentInfo ? paymentInfo.name : '', Validators.required],
      cardnumber: [paymentInfo ? paymentInfo.cardnumber : '', Validators.required],
      month: [paymentInfo ? paymentInfo.month : 'Month', Validators.required],
      year: [paymentInfo ? paymentInfo.year : 'Year', Validators.required],
      securitycode: [paymentInfo ? paymentInfo.securitycode : '', Validators.required]
    });
  }
}
