import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { ShippingAddress } from '@daffodil/core';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  @Input() shippingInfo: ShippingAddress;
  @Output() updateShipping: EventEmitter<any> = new EventEmitter();

  form: FormGroup
  firstname: AbstractControl;
  lastname: AbstractControl;
  street: AbstractControl;
  city: AbstractControl;
  state: AbstractControl;
  postcode: AbstractControl;
  telephone: AbstractControl;

  constructor(
    private fb: FormBuilder
  ) { }

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

    this.firstname = this.form.controls['firstname'];
    this.lastname = this.form.controls['lastname'];
    this.street = this.form.controls['street'];
    this.city = this.form.controls['city'];
    this.state = this.form.controls['state'];
    this.postcode = this.form.controls['postcode'];
    this.telephone = this.form.controls['telephone'];
  }

  stateSelectValues = [
    'State',
    'California'
  ];

  onSubmit(form) {
    if(this.form.valid) {
      this.updateShipping.emit(form.value);
    }
  }
}
