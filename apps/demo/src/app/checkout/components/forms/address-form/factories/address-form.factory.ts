import { Injectable } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

import { AddressFormGroup } from '../models/address-form.type';

@Injectable({
  providedIn: 'root',
})
export class AddressFormFactory {

  constructor(
    private fb: FormBuilder,
  ) {}

  create(address): AddressFormGroup {
    return this.fb.group({
      firstname: [address ? address.firstname : '', Validators.required],
      lastname: [address ? address.lastname : '', Validators.required],
      street: [address ? address.street : '', Validators.required],
      city: [address ? address.city : '', Validators.required],
      country: [address ? address.state : '', Validators.required],
      state: [address ? address.state : '', Validators.required],
      postcode: [address ? address.postcode : '', Validators.required],
      telephone: [address ? address.telephone : ''],
    });
  }
}
