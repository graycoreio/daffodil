import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import { ShippingOptionFormFactory } from '../factories/shipping-option-form.factory';

@Injectable({
  providedIn: 'root',
})
export class ShippingOptionFormService {

  private shippingOptionFormGroup: UntypedFormGroup;

  constructor(
    shippingOptionFormFactory: ShippingOptionFormFactory,
  ) {
    this.shippingOptionFormGroup = shippingOptionFormFactory.create();
  }

  getShippingOptionFormGroup(): UntypedFormGroup {
    return this.shippingOptionFormGroup;
  }
}
