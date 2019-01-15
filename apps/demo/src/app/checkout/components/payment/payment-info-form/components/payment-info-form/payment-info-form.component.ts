import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ErrorStateMatcher } from '@daffodil/design';

@Component({
  selector: 'demo-payment-info-form',
  templateUrl: './payment-info-form.component.html',
  styleUrls: ['./payment-info-form.component.scss']
})
export class PaymentInfoFormComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;

  monthErrorStateMatcher: ErrorStateMatcher;
  yearErrorStateMatcher: ErrorStateMatcher;

  constructor() { }

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

  ngOnInit() {
    this.monthErrorStateMatcher = new ErrorStateMatcher();
    this.monthErrorStateMatcher.isErrorState = (control: FormControl, formSubmitted: boolean) => {
      return (control.errors || control.value === 'Month') && (control.touched || formSubmitted);
    }
  
    this.yearErrorStateMatcher = new ErrorStateMatcher();
    this.yearErrorStateMatcher.isErrorState = (control: FormControl, formSubmitted: boolean) => {
      return (control.errors || control.value === 'Year') && (control.touched || formSubmitted);
    }
  }
}
