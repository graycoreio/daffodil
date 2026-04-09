import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
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
import {
  DAFF_BASIC_BUTTON_COMPONENTS,
  DAFF_ICON_BUTTON_COMPONENTS,
} from '@daffodil/design/button';
import { DaffLoadingIconComponent } from '@daffodil/design/loading-icon';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductStateRootSlice,
  getDaffProductSelectors,
} from '@daffodil/product/state';

import { ProceedToCheckoutDirective } from '../../../proceed-to-checkout/proceed-to-checkout.directive';
import { ViewCartDirective } from '../../../view-cart/view-cart.directive';
import { CloseAddToCartNotification } from '../../actions/add-to-cart-notification.actions';
import * as fromDemoAddToCartNotification from '../../reducers/index';
import { ProductAddedComponent } from '../product-added/product-added.component';

@Component({
  selector: 'demo-add-to-cart-notification',
  templateUrl: './add-to-cart-notification.component.html',
  styleUrls: ['./add-to-cart-notification.component.scss'],
  imports: [
    AsyncPipe,
    ViewCartDirective,
    ProceedToCheckoutDirective,
    ProductAddedComponent,
    DaffLoadingIconComponent,
    DAFF_BASIC_BUTTON_COMPONENTS,
    DAFF_ICON_BUTTON_COMPONENTS,
    FaIconComponent,
  ],
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
