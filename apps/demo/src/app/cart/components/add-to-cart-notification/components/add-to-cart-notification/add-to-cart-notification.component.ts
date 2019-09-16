import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct, fromProduct } from '@daffodil/product';

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

  _verticalPosition = "center";
  _horizontalPosition = "center";

  @Input()
  get verticalPosition(): string { return this._verticalPosition; }
  set verticalPosition(value: string) { this._verticalPosition = value; }

  @Input()
  get horizontalPosition(): string { return this._horizontalPosition; }
  set horizontalPosition(value: string) { this._horizontalPosition = value; }

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
      select(fromProduct.selectProduct, { id: id })
    )));

    this.cartItemCount$ = this.store.pipe(select(fromDemoAddToCartNotification.selectCartItemCount))
  }

  onHide() {
    this.store.dispatch(new CloseAddToCartNotification());
  }
}
