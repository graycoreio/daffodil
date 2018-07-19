import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PaymentInfo } from '@daffodil/core';
import { ErrorStateMatcher } from '../../../design/molecules/error-state-matcher/error-state-matcher.component';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  @Input() paymentInfo: PaymentInfo;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  
  form: FormGroup;
  monthErrorStateMatcher: ErrorStateMatcher;
  yearErrorStateMatcher: ErrorStateMatcher;
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [this.paymentInfo ? this.paymentInfo.name : '', Validators.required],
      'cardnumber': [this.paymentInfo ? this.paymentInfo.cardnumber : '', Validators.required],
      'month': [this.paymentInfo ? this.paymentInfo.month : 'Month', Validators.required],
      'year': [this.paymentInfo ? this.paymentInfo.year : 'Year', Validators.required],
      'securitycode': [this.paymentInfo ? this.paymentInfo.securitycode : '', Validators.required]
    });

    this.monthErrorStateMatcher = new ErrorStateMatcher();
    this.monthErrorStateMatcher.isErrorState = (control: FormControl, formSubmitted: boolean) => {
      return (control.errors || control.value == 'Month') && (control.touched || formSubmitted);
    }

    this.yearErrorStateMatcher = new ErrorStateMatcher();
    this.yearErrorStateMatcher.isErrorState = (control: FormControl, formSubmitted: boolean) => {
      return (control.errors || control.value == 'Year') && (control.touched || formSubmitted);
    }
  }

  monthSelectValues = [
    'Month',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12'
  ];

  yearSelectValues = [
    'Year',
    '2021'
  ];

  onSubmit(form) {
    if(this.form.valid) {
      this.updatePaymentInfo.emit(form.value);
    }
  }
}
