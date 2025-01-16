import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DaffPersonalAddress } from '@daffodil/geography';

import { DemoCheckoutAddressFormComponent } from '../../forms/address/components/address-form/address-form.component';
import { DemoCheckoutAddressFormFactory } from '../../forms/address/factories/address-form.factory';
import {
  DemoCheckoutAddressForm,
  DemoCheckoutAddressFormGroup,
} from '../../forms/address/models/address-form.type';

@Component({
  selector: 'demo-checkout-shipping-address-form',
  templateUrl: './shipping-address-form.component.html',
  styleUrls: ['./shipping-address-form.component.scss'],
  imports: [
    DemoCheckoutAddressFormComponent,
    ReactiveFormsModule,
    DaffButtonComponent,
  ],
})
export class DemoCheckoutShippingAddressFormComponent implements OnInit {
  @Input() shippingAddress: DaffPersonalAddress;

  @Output() submitted = new EventEmitter<DemoCheckoutAddressForm>();

  form: DemoCheckoutAddressFormGroup;

  constructor(
    private addressFormFactory: DemoCheckoutAddressFormFactory,
  ) {}

  ngOnInit() {
    this.form = this.addressFormFactory.create(this.shippingAddress);
  }

  onSubmit(form) {
    if (this.form.valid) {
      this.submitted.emit(form.value);
    }
  };
}
