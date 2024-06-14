import { Injectable } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

import { DaffPersonalAddress } from '@daffodil/geography';

import { DemoCheckoutAddressFormGroup } from '../models/address-form.type';

@Injectable({
  providedIn: 'root',
})
export class DemoCheckoutAddressFormFactory {
  constructor(
    private fb: FormBuilder,
  ) {}

  create(address?: DaffPersonalAddress): DemoCheckoutAddressFormGroup {
    return this.fb.group({
      firstname: [address ? address.firstname : '', Validators.required],
      lastname: [address ? address.lastname : '', Validators.required],
      street: [address ? address.street : '', Validators.required],
      city: [address ? address.city : '', Validators.required],
      country: [address ? address.country_id : '', Validators.required],
      region: [address ? address.region : '', Validators.required],
      postcode: [address ? address.postcode : '', Validators.required],
      telephone: [address ? address.telephone : ''],
    });
  }
}
