import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFacade } from '@daffodil/cart/state';

import { ShowPaymentView } from '../../actions/payment.actions';
import * as fromDemoCheckout from '../../reducers';

@Component({
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.scss'],
})
export class CheckoutViewComponent implements OnInit {

	cart$: Observable<DaffCart>;
	loading$: Observable<boolean>;
  showPaymentView$: Observable<boolean>;
  showReviewView$: Observable<boolean>;

  constructor(
		private store: Store<fromDemoCheckout.State>,
		private cartFacade: DaffCartFacade,
  ) { }

  ngOnInit() {
    this.cart$ = this.cartFacade.cart$;
    this.loading$ = this.cartFacade.loading$;
    this.showPaymentView$ = this.store.pipe(select(fromDemoCheckout.selectShowPaymentView));
    this.showReviewView$ = this.store.pipe(select(fromDemoCheckout.selectShowReviewView));
  }

  onUpdateShippingAddress() {
    this.store.dispatch(
      new ShowPaymentView(),
    );
  }
}
