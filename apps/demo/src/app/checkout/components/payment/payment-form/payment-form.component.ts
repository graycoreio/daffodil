import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';

import { DaffAuthorizeNetCreditCard } from '@daffodil/authorizenet';
import { DaffCartAddress } from '@daffodil/cart';
import {
  DaffCheckboxModule,
  DaffInputModule,
  DaffNativeSelectModule,
} from '@daffodil/design';
import { DaffButtonComponent } from '@daffodil/design/button';

import { DemoGeographyAddressSummaryComponent } from '../../../../geography/components/address-summary/address-summary.component';
import { DemoCheckoutAddressFormComponent } from '../../forms/address/components/address-form/address-form.component';
import { DemoCheckoutAddressFormFactory } from '../../forms/address/factories/address-form.factory';
import { DemoCheckoutBillingFormGroup } from '../models/payment-form.type';
import { DemoCheckoutPaymentInfoFormComponent } from '../payment-info-form/components/payment-info-form/payment-info-form.component';
import { PaymentInfoFormFactory } from '../payment-info-form/factories/payment-info-form.factory';

@Component({
  selector: 'demo-checkout-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffInputModule,
    DaffNativeSelectModule,
    DemoCheckoutPaymentInfoFormComponent,
    DaffButtonComponent,
    DaffCheckboxModule,
    DemoCheckoutAddressFormComponent,
    DemoGeographyAddressSummaryComponent,
  ],
})
export class DemoCheckoutPaymentFormComponent implements OnInit {
  @Input() paymentInfo: DaffAuthorizeNetCreditCard;
  @Input() billingAddress: DaffCartAddress;
  @Input() billingAddressIsShippingAddress: boolean;
  @Input() shippingAddress: DaffCartAddress;

  @Output() submitted = new EventEmitter<DemoCheckoutBillingFormGroup['value']>();

  form: DemoCheckoutBillingFormGroup;

  constructor(
    private fb: FormBuilder,
    private paymentInfoFormFactory: PaymentInfoFormFactory,
    private addressFormFactory: DemoCheckoutAddressFormFactory,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      paymentInfo: this.paymentInfoFormFactory.create(this.paymentInfo),
      address: this.addressFormFactory.create(this.billingAddress),
      bsas: this.billingAddressIsShippingAddress,
    });
  }

  onSubmit() {
    if (this.form.value.bsas && this.form.controls.paymentInfo.valid) {
      this.submitted.emit({
        ...this.form.value,
        address: this.shippingAddress,
      });
    } else if (this.form.valid) {
      this.submitted.emit(
        this.form.value,
      );
    }
  };
}
