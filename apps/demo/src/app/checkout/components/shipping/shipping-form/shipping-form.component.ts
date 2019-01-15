import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DaffodilAddress } from '@daffodil/core';

import { ShippingOptionFormService } from '../shipping-options/components/services/shipping-option-form.service';
import { AddressFormFactory } from '../../forms/address-form/factories/address-form.factory';

@Component({
  selector: 'demo-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {

  @Input() shippingAddress: DaffodilAddress;
  @Input() editMode: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private addressFormFactory: AddressFormFactory,
    private shippingOptionFormService: ShippingOptionFormService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      address: this.addressFormFactory.create(this.shippingAddress),
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
