import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartCoupon,
  DaffCartStorageService,
  DAFF_CART_ERROR_MATCHER,
} from '@daffodil/cart';
import {
  DaffCartCouponDriver,
  DaffCartCouponServiceInterface,
} from '@daffodil/cart/driver';
import { DaffStorageServiceError } from '@daffodil/core';
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

  @Effect()
  apply$ = this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponApplyAction),
    switchMap((action: DaffCartCouponApply<V>) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.apply(cartId, action.payload)),
      map(resp => new DaffCartCouponApplySuccess(resp)),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartCouponApplyFailure(this.errorMatcher(error)),
      )),
    )),
  );

  @Effect()
  list$ = this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponListAction),
    switchMap((action: DaffCartCouponList) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.list(cartId)),
      map(resp => new DaffCartCouponListSuccess<V>(resp)),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartCouponListFailure(this.errorMatcher(error)),
      )),
    )),
  );

  @Effect()
  remove$ = this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponRemoveAction),
    switchMap((action: DaffCartCouponRemove<V>) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.remove(cartId, action.payload)),
      map(resp => new DaffCartCouponRemoveSuccess(resp)),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartCouponRemoveFailure(this.errorMatcher(error)),
      )),
    )),
  );

  @Effect()
  removeAll$ = this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponRemoveAllAction),
    switchMap((action: DaffCartCouponRemoveAll) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.removeAll(cartId)),
      map(resp => new DaffCartCouponRemoveAllSuccess(resp)),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartCouponRemoveAllFailure(this.errorMatcher(error)),
      )),
    )),
  );
}
