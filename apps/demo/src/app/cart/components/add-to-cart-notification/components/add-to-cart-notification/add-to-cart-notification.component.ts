import {
  Component,
  OnInit,
} from '@angular/core';
import {
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DaffCartItem } from '@daffodil/cart';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductStateRootSlice,
  getDaffProductSelectors,
} from '@daffodil/product/state';

import { CloseAddToCartNotification } from '../../actions/add-to-cart-notification.actions';
import * as fromDemoAddToCartNotification from '../../reducers/index';


@Component({
  selector: 'demo-add-to-cart-notification',
  templateUrl: './add-to-cart-notification.component.html',
  styleUrls: ['./add-to-cart-notification.component.scss'],
  standalone: false,
})
export class AddToCartNotificationComponent implements OnInit {
  faCheck = faCheck;
  faTimes = faTimes;

  open$: Observable<boolean>;
  productQty$: Observable<number>;
  cartItemCount$: Observable<number>;
  loading$: Observable<boolean>;
  productId$: Observable<DaffCartItem['product_id']>;
  product$: Observable<DaffProduct>;

  constructor(private store: Store<fromDemoAddToCartNotification.State | DaffProductStateRootSlice>) { }

  ngOnInit() {
    const { selectProduct } = getDaffProductSelectors<DaffProduct>();

    this.open$ = this.store.pipe(
      select(fromDemoAddToCartNotification.selectOpen),
    );

    this.productQty$ = this.store.pipe(
      select(fromDemoAddToCartNotification.selectProductQty),
    );

    this.loading$ = this.store.pipe(
      select(fromDemoAddToCartNotification.selectLoading),
    );

    this.productId$ = this.store.pipe(
      select(fromDemoAddToCartNotification.selectProductId),
    );

    this.product$ = this.productId$.pipe(switchMap((id) => this.store.pipe(
      select(selectProduct(id)),
    )));

    this.cartItemCount$ = this.store.pipe(select(fromDemoAddToCartNotification.selectCartItemCount));
  }

  onHide() {
    this.store.dispatch(new CloseAddToCartNotification());
  }
}
