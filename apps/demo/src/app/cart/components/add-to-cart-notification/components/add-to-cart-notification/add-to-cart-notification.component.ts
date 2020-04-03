import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct, selectProduct } from '@daffodil/product';

import * as fromDemoAddToCartNotification from '../../reducers/index';
import { CloseAddToCartNotification } from '../../actions/add-to-cart-notification.actions';
import { switchMap } from 'rxjs/operators';

import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'demo-add-to-cart-notification',
  templateUrl: './add-to-cart-notification.component.html',
  styleUrls: ['./add-to-cart-notification.component.scss']
})
export class AddToCartNotificationComponent implements OnInit {
  faCheck = faCheck;
  faTimes = faTimes;
  
  open$: Observable<boolean>;
  productQty$: Observable<number>;
  cartItemCount$: Observable<number>;
  loading$: Observable<boolean>;
  productId$: Observable<string>;
  product$: Observable<DaffProduct>;

  constructor(private store: Store<fromDemoAddToCartNotification.State>) { }

  ngOnInit() {
    this.open$ = this.store.pipe(
      select(fromDemoAddToCartNotification.selectOpen)
    );

    this.productQty$ = this.store.pipe(
      select(fromDemoAddToCartNotification.selectProductQty)
    );

    this.loading$ = this.store.pipe(
      select(fromDemoAddToCartNotification.selectLoading)
    );

    this.productId$ = this.store.pipe(
      select(fromDemoAddToCartNotification.selectProductId)
    );

    this.product$ = this.productId$.pipe(switchMap((id) => this.store.pipe(
      select(selectProduct(), { id: id })
    )));

    this.cartItemCount$ = this.store.pipe(select(fromDemoAddToCartNotification.selectCartItemCount))
  }

  onHide() {
    this.store.dispatch(new CloseAddToCartNotification());
  }
}
