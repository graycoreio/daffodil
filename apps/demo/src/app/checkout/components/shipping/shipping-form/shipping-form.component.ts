import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffCartShippingRate } from '@daffodil/cart';
import { DaffButtonComponent } from '@daffodil/design/button';

import { DemoCheckoutAddressFormComponent } from '../../forms/address/components/address-form/address-form.component';
import { DemoCheckoutShippingOptionsComponent } from '../shipping-options/components/shipping-options/shipping-options.component';
import { DemoCheckoutShippingFormFactory } from '../shipping-options/factories/shipping-option-form.factory';
import {
  DemoCheckoutShippingForm,
  DemoCheckoutShippingFormGroup,
} from '../shipping-options/models/shipping-form.type';

@Component({
  selector: 'demo-checkout-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
  imports: [
    DemoCheckoutAddressFormComponent,
    DemoCheckoutShippingOptionsComponent,
    ReactiveFormsModule,
    DaffButtonComponent,
  ],
})
export class DemoCheckoutShippingFormComponent implements OnInit {
  @Input() selectedOption: DaffCartShippingRate;
  @Input() options: Array<DaffCartShippingRate>;

  @Output() submitted = new EventEmitter<DaffCartShippingRate>();

  form: DemoCheckoutShippingFormGroup;

  constructor(
    private shippingOptionFormFactory: DemoCheckoutShippingFormFactory,
  ) {}

  ngOnInit() {
    this.form = this.shippingOptionFormFactory.create({
      id: this.selectedOption?.id,
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const shipping = this.options.find(({ id }) => id === (<DemoCheckoutShippingForm>this.form.value).id);
      if (shipping) {
        this.submitted.emit(shipping);
      }
    }
  };
}
