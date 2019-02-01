import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromDemoCheckout from '../../reducers';
import { ShowPaymentView } from '../../actions/payment.actions';

@Component({
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.scss']
})
export class CheckoutViewComponent implements OnInit {

  showPaymentView$: Observable<boolean>;
  showReviewView$: Observable<boolean>;

  constructor(
    private store: Store<fromDemoCheckout.State>
  ) { }

  ngOnInit() {
    this.showPaymentView$ = this.store.pipe(select(fromDemoCheckout.selectShowPaymentView));
    this.showReviewView$ = this.store.pipe(select(fromDemoCheckout.selectShowReviewView));
  }

  onUpdateShippingAddress() {
    this.store.dispatch(
      new ShowPaymentView()
    );
  }
}
