import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AddressFormFactory } from '../factories/address-form.factory';

@Injectable({
  providedIn: 'root'
})
export class AddressFormService {

  private addressFormGroup: FormGroup;

  constructor(
    addressFormFactory: AddressFormFactory
  ) {
    this.addressFormGroup = addressFormFactory.create();
  }
  
  getAddressFormGroup(): FormGroup {
    return this.addressFormGroup;
  }
}
