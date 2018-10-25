import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { PaymentInfo, DaffodilAddress } from '@daffodil/core';
import { ErrorStateMatcher } from '@daffodil/design';

import { Store } from '@ngrx/store';

import * as fromFoundationCheckout from '../../../reducers';
import { EnablePlaceOrderButton } from '../../../actions/checkout.actions';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  @Input() paymentInfo: PaymentInfo;
  @Input() billingAddress: DaffodilAddress;
  @Input() billingAddressIsShippingAddress: boolean;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateBillingAddress: EventEmitter<any> = new EventEmitter();
  @Output() toggleBillingAddressIsShippingAddress: EventEmitter<any> = new EventEmitter();
  
  form: FormGroup;
  monthErrorStateMatcher: ErrorStateMatcher;
  yearErrorStateMatcher: ErrorStateMatcher;
  stateErrorStateMatcher: ErrorStateMatcher;
  
  constructor(
    private fb: FormBuilder,
    private store: Store<fromFoundationCheckout.State>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [this.paymentInfo ? this.paymentInfo.name : '', Validators.required],
      'cardnumber': [this.paymentInfo ? this.paymentInfo.cardnumber : '', Validators.required],
      'month': [this.paymentInfo ? this.paymentInfo.month : 'Month', Validators.required],
      'year': [this.paymentInfo ? this.paymentInfo.year : 'Year', Validators.required],
      'securitycode': [this.paymentInfo ? this.paymentInfo.securitycode : '', Validators.required],
      'firstname': [this.billingAddress ? this.billingAddress.firstname : '', Validators.required],
      'lastname': [this.billingAddress ? this.billingAddress.lastname : '', Validators.required],
      'street': [this.billingAddress ? this.billingAddress.street : '', Validators.required],
      'city': [this.billingAddress ? this.billingAddress.city : '', Validators.required],
      'state': [this.billingAddress ? this.billingAddress.state : 'State', Validators.required],
      'postcode': [this.billingAddress ? this.billingAddress.postcode : '', Validators.required],
      'telephone': [this.billingAddress ? this.billingAddress.telephone : '', Validators.required]
    });

    this.monthErrorStateMatcher = new ErrorStateMatcher();
    this.monthErrorStateMatcher.isErrorState = (control: FormControl, formSubmitted: boolean) => {
      return (control.errors || control.value == 'Month') && (control.touched || formSubmitted);
    }

    this.yearErrorStateMatcher = new ErrorStateMatcher();
    this.yearErrorStateMatcher.isErrorState = (control: FormControl, formSubmitted: boolean) => {
      return (control.errors || control.value == 'Year') && (control.touched || formSubmitted);
    }

    this.stateErrorStateMatcher = new ErrorStateMatcher();
    this.stateErrorStateMatcher.isErrorState = (control: FormControl, formSubmitted: boolean) => {
      return (control.errors || control.value == 'State') && (control.touched || formSubmitted);
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

  stateSelectValues = [
    'State',
    'California'
  ];

  private isPaymentInfoValid(form) {
    return (
      form.controls.name.valid &&
      form.controls.cardnumber.valid &&
      form.controls.month.valid &&
      form.controls.year.valid &&
      form.controls.securitycode.valid
    )
  };

  private buildPaymentInfo(formValue) {
    return {
      name: formValue.name,
      cardnumber: formValue.cardnumber,
      month: formValue.month,
      year: formValue.year,
      securitycode: formValue.securitycode
    };
  };

  private buildBillingAddress(formValue) {
    return {
      firstname: formValue.firstname,
      lastname: formValue.lastname,
      street: formValue.street,
      city: formValue.city,
      state: formValue.state,
      postcode: formValue.postcode,
      telephone: formValue.telephone
    };
  };

  onSubmit() {
    if(this.billingAddressIsShippingAddress && this.isPaymentInfoValid(this.form)) {
      this.updatePaymentInfo.emit(
        this.buildPaymentInfo(this.form.value)
      );
      this.store.dispatch(new EnablePlaceOrderButton());
    } else if (this.form.valid) {
      this.updatePaymentInfo.emit(
        this.buildPaymentInfo(this.form.value)
      );

      this.updateBillingAddress.emit(
        this.buildBillingAddress(this.form.value)
      );
      this.store.dispatch(new EnablePlaceOrderButton());
    }
  };
}
