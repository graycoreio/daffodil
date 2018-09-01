import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddressFormFactory {

  constructor(
    private fb: FormBuilder
  ) {}
  
  create() : FormGroup {
    return this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['State', Validators.required],
      postcode: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }
}
