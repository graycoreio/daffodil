import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct, fromProduct } from '@daffodil/product';
import { State } from '../../reducers/add-to-cart-notification.reducer'; 
import { 
  selectOpen, 
  selectProductQty, 
  selectLoading, 
  selectProductId,
  selectCartItemCount
} from '../../selectors/add-to-cart-notification.selector';

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

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.open$ = this.store.pipe(
      select(selectOpen)
    );

    this.productQty$ = this.store.pipe(
      select(selectProductQty)
    );

    this.loading$ = this.store.pipe(
      select(selectLoading)
    );

    this.productId$ = this.store.pipe(
      select(selectProductId)
    );

    this.product$ = this.productId$.pipe(switchMap((id) => this.store.pipe(
      select(fromProduct.selectProduct, { id: id })
    )));

    this.cartItemCount$ = this.store.pipe(select(selectCartItemCount))
  }

  onHide() {
    this.store.dispatch(new CloseAddToCartNotification());
  }
}
