import { Injectable } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AddressFormFactory {

  constructor(
    private fb: UntypedFormBuilder,
  ) {}

  create(address): UntypedFormGroup {
    return this.fb.group({
      firstname: [address ? address.firstname : '', Validators.required],
      lastname: [address ? address.lastname : '', Validators.required],
      street: [address ? address.street : '', Validators.required],
      city: [address ? address.city : '', Validators.required],
      state: [address ? address.state : '', Validators.required],
      postcode: [address ? address.postcode : '', Validators.required],
      telephone: [address ? address.telephone : ''],
    });
  }
}
