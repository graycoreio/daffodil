import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ShippingOptionFormFactory {

  constructor(
    private fb: FormBuilder
  ) {}
  
  create() : FormGroup {
    return this.fb.group({
      id: ['', Validators.required]
    });
  }
}
