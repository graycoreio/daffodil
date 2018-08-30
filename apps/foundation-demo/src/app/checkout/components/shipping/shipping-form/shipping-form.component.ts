import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DaffodilAddress } from '@daffodil/core';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShippingFormComponent {

  @Input() shippingInfo: DaffodilAddress;
  @Input() selectedShippingOptionId: number;
  @Input() editMode: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      address: this.fb.group({
        firstname: [this.shippingInfo ? this.shippingInfo.firstname : '', Validators.required],
        lastname: [this.shippingInfo ? this.shippingInfo.lastname : '', Validators.required],
        street: [this.shippingInfo ? this.shippingInfo.street : '', Validators.required],
        city: [this.shippingInfo ? this.shippingInfo.city : '', Validators.required],
        state: [this.shippingInfo ? this.shippingInfo.state : 'State', Validators.required],
        postcode: [this.shippingInfo ? this.shippingInfo.postcode : '', Validators.required],
        telephone: [this.shippingInfo ? this.shippingInfo.telephone : '', Validators.required]
      })
    });
  }

  isSelectedShippingOptionIndexNull() {
    return this.selectedShippingOptionId === null;
  };

  isEditMode() {
    return this.editMode;
  };

  onSubmit(form) {
    if(this.form.valid) {
      this.submitted.emit(form.value.address);
    }
  };
}
