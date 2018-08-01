import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import { PaymentInfo } from '../models/payment-info';
import * as fromPayment from '../reducers';
import { UpdatePaymentInfo } from '../actions/payment.actions';

@Component({
  selector: '[payment-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'PaymentContainer'
})
export class PaymentContainer implements OnInit {
  
  paymentInfo$: Observable<PaymentInfo>;

  constructor(
    private store: Store<fromPayment.State>
  ) { }

  ngOnInit() {
    this.paymentInfo$ = this.store.pipe(
      select(fromPayment.selectPaymentInfoState)
    );
  }

  updatePaymentInfo(info: PaymentInfo) {
    this.store.dispatch(new UpdatePaymentInfo(info));
  }
}
