import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  defer,
  of,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartCoupon,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartCouponDriver,
  DaffCartCouponServiceInterface,
} from '@daffodil/cart/driver';
import {
  DAFF_STORAGE_SERVICE_ERROR_CODE,
  DaffStorageServiceError,
  catchAndArrayifyErrors,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartCouponActionTypes,
  DaffCartCouponList,
  DaffCartCouponListSuccess,
  DaffCartCouponListFailure,
  DaffCartCouponRemoveSuccess,
  DaffCartCouponRemoveFailure,
  DaffCartCouponRemove,
  DaffCartCouponRemoveAll,
  DaffCartCouponRemoveAllSuccess,
  DaffCartCouponRemoveAllFailure,
  DaffCartCouponApply,
  DaffCartCouponApplySuccess,
  DaffCartCouponApplyFailure,
  DaffCartStorageFailure,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartCouponEffects<
  T extends DaffCart = DaffCart,
  V extends DaffCartCoupon = DaffCartCoupon
> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartCouponDriver) private driver: DaffCartCouponServiceInterface<T, V>,
    private storage: DaffCartStorageService,
  ) {}


  apply$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponApplyAction),
    switchMap((action: DaffCartCouponApply<V>) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.apply(cartId, action.payload)),
      map(resp => new DaffCartCouponApplySuccess(resp)),
      catchAndArrayifyErrors(error => of(error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
        ? new DaffCartStorageFailure(error.map(this.errorMatcher))
        : new DaffCartCouponApplyFailure(error.map(this.errorMatcher)),
      )),
    )),
  ));


  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponListAction),
    switchMap((action: DaffCartCouponList) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.list(cartId)),
      map(resp => new DaffCartCouponListSuccess<V>(resp)),
      catchAndArrayifyErrors(error => of(error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
        ? new DaffCartStorageFailure(error.map(this.errorMatcher))
        : new DaffCartCouponListFailure(error.map(this.errorMatcher)),
      )),
    )),
  ));


  remove$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponRemoveAction),
    switchMap((action: DaffCartCouponRemove<V>) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.remove(cartId, action.payload)),
      map(resp => new DaffCartCouponRemoveSuccess(resp)),
      catchAndArrayifyErrors(error => of(error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
        ? new DaffCartStorageFailure(error.map(this.errorMatcher))
        : new DaffCartCouponRemoveFailure(error.map(this.errorMatcher)),
      )),
    )),
  ));


  removeAll$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponRemoveAllAction),
    switchMap((action: DaffCartCouponRemoveAll) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.removeAll(cartId)),
      map(resp => new DaffCartCouponRemoveAllSuccess(resp)),
      catchAndArrayifyErrors(error => of(error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
        ? new DaffCartStorageFailure(error.map(this.errorMatcher))
        : new DaffCartCouponRemoveAllFailure(error.map(this.errorMatcher)),
      )),
    )),
  ));
}
