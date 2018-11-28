import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromFoundationAddToCartNotification from '../../reducers/index';
import { Observable } from 'rxjs';
import { CloseAddToCartNotification } from '../../actions/add-to-cart-notification.actions';
import { Product } from '@daffodil/core';
import { fromProduct } from '@daffodil/state';

@Component({
  selector: 'add-to-cart-notification',
  templateUrl: './add-to-cart-notification.component.html',
  styleUrls: ['./add-to-cart-notification.component.scss']
})
export class AddToCartNotificationComponent implements OnInit {
  open$: Observable<boolean>;
  productQty$: Observable<number>;
  loading$: Observable<boolean>;
  productId$: Observable<string>;
  product$: Observable<Product>;

  _verticalPosition: string = "center";
  _horizontalPosition: string = "center";
  
  @Input()
  get verticalPosition(): string { return this._verticalPosition; }
  set verticalPosition(value: string) { this._verticalPosition = value; }

  @Input()
  get horizontalPosition(): string { return this._horizontalPosition; }
  set horizontalPosition(value: string) { this._horizontalPosition = value; }
  
  constructor(
    private store: Store<fromFoundationAddToCartNotification.State>
  ) { }

  ngOnInit() {
    this.open$ = this.store.pipe(
      select(fromFoundationAddToCartNotification.selectOpen)
    );

    this.productQty$ = this.store.pipe(
      select(fromFoundationAddToCartNotification.selectProductQty)
    );

    this.loading$ = this.store.pipe(
      select(fromFoundationAddToCartNotification.selectLoading)
    );

    this.productId$ = this.store.pipe(
      select(fromFoundationAddToCartNotification.selectProductId)
    );
    
    this.productId$.subscribe((productId) => {
      this.product$ = this.store.pipe(
        select(fromProduct.selectProduct, {id: productId})
      );
    });
  }

  get cartItemCount$(): Observable<number> {
    return this.store.pipe(
      select(fromFoundationAddToCartNotification.selectCartItemCount)
    )
  }

  onHide() {
    this.store.dispatch(new CloseAddToCartNotification());
  }
}
