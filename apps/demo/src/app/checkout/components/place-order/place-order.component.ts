import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFacade } from '@daffodil/cart/state';
import { PlaceOrder } from '@daffodil/checkout';

import * as fromDemoCheckout from '../../reducers';

@Component({
  selector: 'demo-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
})
export class PlaceOrderComponent implements OnInit {

  enablePlaceOrderButton$: Observable<boolean>;
  cart$: Observable<DaffCart>;

  constructor(
    private store: Store<any>,
    private cartFacade: DaffCartFacade,
  ) { }

  ngOnInit() {
    this.enablePlaceOrderButton$ = this.store.pipe(select(fromDemoCheckout.selectEnablePlaceOrderButton));
    this.cart$ = this.cartFacade.cart$;
  }

  placeOrder() {
    this.cart$.pipe(take(1)).subscribe((cart: DaffCart) => {
      this.cartFacade.dispatch(new PlaceOrder(cart));
    });
  }
}
