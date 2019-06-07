import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffProduct, fromProduct } from '@daffodil/product';

import * as fromDemoAddToCartNotification from '../../reducers/index';
import { CloseAddToCartNotification } from '../../actions/add-to-cart-notification.actions';

@Component({
  selector: 'demo-add-to-cart-notification',
  templateUrl: './add-to-cart-notification.component.html',
  styleUrls: ['./add-to-cart-notification.component.scss']
})
export class AddToCartNotificationComponent implements OnInit {
  open$: Observable<boolean>;
  productQty$: Observable<number>;
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
  
  constructor(
    private store: Store<fromDemoAddToCartNotification.State>
  ) { }

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
    
    this.productId$.subscribe((productId) => {
      this.product$ = this.store.pipe(
        select(fromProduct.selectProduct, {id: productId})
      );
    });
  }

  get cartItemCount$(): Observable<number> {
    return this.store.pipe(
      select(fromDemoAddToCartNotification.selectCartItemCount)
    )
  }

  onHide() {
    this.store.dispatch(new CloseAddToCartNotification());
  }
}
