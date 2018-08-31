import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DaffodilAddress } from '@daffodil/core';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent {

  // todo: use shippingInfo when session storage is implemented. Right now, it is not actually needed.
  @Input() shippingInfo: DaffodilAddress;
  @Input() editMode: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      address: this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['State', Validators.required],
        postcode: ['', Validators.required],
        telephone: ['', Validators.required]
      }),
      shippingOption: this.fb.group({
        id: ['', Validators.required]
      })
    });
  }

  isEditMode() {
    return this.editMode;
  };

  onSubmit(form) {
    if(this.form.valid) {
      this.submitted.emit(form.value);
    }
  };
}
