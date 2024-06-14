import { Injectable } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

import {
  DemoCheckoutShippingForm,
  DemoCheckoutShippingFormGroup,
} from '../models/shipping-form.type';

@Injectable({
  providedIn: 'root',
})
export class DemoCheckoutShippingFormFactory {

  constructor(
    private fb: FormBuilder,
  ) {}

  create(initialState?: Partial<DemoCheckoutShippingForm>): DemoCheckoutShippingFormGroup {
    return this.fb.group({
      id: [initialState?.id || '', Validators.required],
    });
  }
}
