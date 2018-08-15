import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DaffodilAddress, ShippingOption } from '@daffodil/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '../../../../design/molecules/error-state-matcher/error-state-matcher.component';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent {

  @Input() shippingInfo: DaffodilAddress;
  @Input() selectedShippingOption: string;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();

  form: FormGroup
  stateErrorStateMatcher: ErrorStateMatcher;
  shippingOptions: ShippingOption[];

  constructor(
    private fb: FormBuilder
  ) { 
    this.shippingOptions = [
      {
        id: 'standard-shipping',
        text: 'Standard'
      },
      {
        id: 'two-day-shipping',
        text: 'Two Day'
      },
      {
        id: 'one-day-shipping',
        text: 'One Day'
      }
    ]
  }

  ngOnInit() {
    this.form = this.fb.group({
      'firstname': [this.shippingInfo ? this.shippingInfo.firstname : '', Validators.required],
      'lastname': [this.shippingInfo ? this.shippingInfo.lastname : '', Validators.required],
      'street': [this.shippingInfo ? this.shippingInfo.street : '', Validators.required],
      'city': [this.shippingInfo ? this.shippingInfo.city : '', Validators.required],
      'state': [this.shippingInfo ? this.shippingInfo.state : 'State', Validators.required],
      'postcode': [this.shippingInfo ? this.shippingInfo.postcode : '', Validators.required],
      'telephone': [this.shippingInfo ? this.shippingInfo.telephone : '', Validators.required]
    });

    this.stateErrorStateMatcher = new ErrorStateMatcher();
    this.stateErrorStateMatcher.isErrorState = (control: FormControl, formSubmitted: boolean) => {
      return (control.errors || control.value == 'State') && (control.touched || formSubmitted);
    }
  }

  stateSelectValues = [
    'State',
    'California'
  ];

  onSubmit(form) {
    if(this.form.valid) {
      this.updateShippingInfo.emit(form.value);
      this.continueToPayment.emit();
    }
  }

  onSelectShippingOption(option: string) {
    this.selectShippingOption.emit(option);
  }
}
