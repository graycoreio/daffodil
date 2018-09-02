import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ShippingOptionFormFactory } from '../factories/shipping-option-form.factory';

@Injectable({
  providedIn: 'root'
})
export class ShippingOptionFormService {

  private shippingOptionFormGroup: FormGroup;

  constructor(
    shippingOptionFormFactory: ShippingOptionFormFactory
  ) {
    this.shippingOptionFormGroup = shippingOptionFormFactory.create();
  }
  
  getShippingOptionFormGroup(): FormGroup {
    return this.shippingOptionFormGroup;
  }
}
