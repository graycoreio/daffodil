import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';

import { DaffAddress } from '@daffodil/core';

import { AddressFormFactory } from '../../forms/address-form/factories/address-form.factory';
import { ShippingOptionFormService } from '../shipping-options/components/services/shipping-option-form.service';

@Component({
  selector: 'demo-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
})
export class ShippingFormComponent implements OnInit {

  @Input() shippingAddress: DaffAddress;
  @Input() editMode: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  form: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private addressFormFactory: AddressFormFactory,
    private shippingOptionFormService: ShippingOptionFormService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      address: this.addressFormFactory.create(this.shippingAddress),
      shippingOption: this.shippingOptionFormService.getShippingOptionFormGroup(),
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
