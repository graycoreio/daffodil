import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DaffodilAddress } from '@daffodil/core';

import { AddressFormService } from '../../forms/address-form/services/address-form.service';
import { ShippingOptionFormService } from '../shipping-options/components/services/shipping-option-form.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent {

  // todo: use shippingAddress when session storage is implemented. Right now, it is not actually needed.
  @Input() shippingAddress: DaffodilAddress;
  @Input() editMode: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
    private shippingOptionFormService: ShippingOptionFormService
  ) {
    this.form = this.fb.group({
      address: this.addressFormService.getAddressFormGroup(),
      shippingOption: this.shippingOptionFormService.getShippingOptionFormGroup()
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
