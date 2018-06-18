import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  form: FormGroup
  firstName: AbstractControl;
  lastName: AbstractControl;
  address: AbstractControl;
  city: AbstractControl;
  state: AbstractControl;
  zip: AbstractControl;
  phone: AbstractControl;

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'address': ['', Validators.required],
      'city': ['', Validators.required],
      'state': ['State', Validators.required],
      'zip': ['', Validators.required],
      'phone': ['', Validators.required]
    });

    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
    this.address = this.form.controls['address'];
    this.city = this.form.controls['city'];
    this.state = this.form.controls['state'];
    this.zip = this.form.controls['zip'];
    this.phone = this.form.controls['phone'];
  }

  ngOnInit() {
  }

  stateSelectValues = [
    'State',
    'California'
  ];

  onSubmit(value) {
    console.log(value);
  }

}
