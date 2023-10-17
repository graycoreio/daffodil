import { Injectable } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ShippingOptionFormFactory {

  constructor(
    private fb: UntypedFormBuilder,
  ) {}

  create(): UntypedFormGroup {
    return this.fb.group({
      id: ['', Validators.required],
    });
  }
}
