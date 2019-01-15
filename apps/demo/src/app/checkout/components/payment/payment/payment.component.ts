import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymentInfo, DaffodilAddress } from '@daffodil/core';
import { Store, select } from '@ngrx/store';
import * as fromFoundationCheckout from '../../../reducers';
import { ToggleShowPaymentForm, HidePaymentForm, ShowPaymentForm } from '../../../actions/payment.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {

  @Input() paymentInfo: PaymentInfo;
  @Input() billingAddress: DaffodilAddress;
  @Input() billingAddressIsShippingAddress: boolean;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateBillingAddress: EventEmitter<any> = new EventEmitter();
  @Output() toggleBillingAddressIsShippingAddress: EventEmitter<any> = new EventEmitter();
  showPaymentForm$: Observable<boolean>;

  constructor(
    private store: Store<fromFoundationCheckout.State>
  ) { }

  ngOnInit() {
    if(this.paymentInfo) {
      this.store.dispatch(
        new HidePaymentForm()
      )
    } else {
      this.store.dispatch(
        new ShowPaymentForm()
      )
    }

    this.showPaymentForm$ = this.store.pipe(select(fromFoundationCheckout.selectShowPaymentForm));
  }

  togglePaymentView() {
    this.store.dispatch(
      new ToggleShowPaymentForm()
    );
  }

  onUpdatePaymentInfo(paymentInfo: PaymentInfo) {
    this.updatePaymentInfo.emit(paymentInfo);
    this.togglePaymentView();
  }

  onUpdateBillingAddress(billingAddress: DaffodilAddress) {
    this.updateBillingAddress.emit(billingAddress);
  }

  onToggleBillingAddressIsShippingAddress() {
    this.toggleBillingAddressIsShippingAddress.emit();
  }
}
