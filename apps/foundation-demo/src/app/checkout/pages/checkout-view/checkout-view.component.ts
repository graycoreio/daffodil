import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromFoundationCheckout from '../../reducers';
import { ShowPaymentView } from '../../actions/payment.actions';

@Component({
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.scss']
})
export class CheckoutViewComponent implements OnInit {

  showPaymentView$: Observable<boolean>;
  showReviewView$: Observable<boolean>;
  isOrderPlaced$: Observable<boolean>;

  constructor(
    private store: Store<fromFoundationCheckout.State>
  ) { }

  ngOnInit() {
    this.showPaymentView$ = this.store.select(fromFoundationCheckout.selectShowPaymentView);

    this.showReviewView$ = this.store.select(fromFoundationCheckout.selectShowReviewView);

    this.isOrderPlaced$ = this.store.select(fromFoundationCheckout.selectIsOrderPlaced);
  }

  onUpdateShippingAddress() {
    this.store.dispatch(
      new ShowPaymentView()
    );
  }
}
