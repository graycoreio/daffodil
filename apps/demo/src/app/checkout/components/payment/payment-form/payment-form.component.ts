import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Store } from '@ngrx/store';

import { PaymentInfo } from '@daffodil/checkout';
import { DaffAddress } from '@daffodil/core';

import { EnablePlaceOrderButton } from '../../../actions/checkout.actions';
import * as fromDemoCheckout from '../../../reducers';
import { AddressFormFactory } from '../../forms/address-form/factories/address-form.factory';
import { PaymentInfoFormFactory } from '../payment-info-form/factories/payment-info-form.factory';

@Component({
  selector: 'demo-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {

  @Input() paymentInfo: PaymentInfo;
  @Input() billingAddress: DaffAddress;
  @Input() billingAddressIsShippingAddress: boolean;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateBillingAddress: EventEmitter<any> = new EventEmitter();
  @Output() toggleBillingAddressIsShippingAddress: EventEmitter<any> = new EventEmitter();

  form: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private paymentInfoFormFactory: PaymentInfoFormFactory,
    private addressFormFactory: AddressFormFactory,
    private store: Store<fromDemoCheckout.State>,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      paymentInfo: this.paymentInfoFormFactory.create(this.paymentInfo),
      address: this.addressFormFactory.create(this.billingAddress),
    });
  }

  onSubmit() {
    if(this.billingAddressIsShippingAddress && this.form.controls.paymentInfo.valid) {
      this.updatePaymentInfo.emit(
        this.form.value.paymentInfo,
      );
      this.store.dispatch(new EnablePlaceOrderButton());
    } else if (this.form.valid) {
      this.updatePaymentInfo.emit(
        this.form.value.paymentInfo,
      );

      this.updateBillingAddress.emit(
        this.form.value.address,
      );
      this.store.dispatch(new EnablePlaceOrderButton());
    }
  };
}
