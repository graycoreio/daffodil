import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, tap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  DaffStorageServiceError
} from '@daffodil/core'

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
  DaffCartStorageFailure
} from '../actions/public_api';
import { DaffCart } from '../models/cart';
import { DaffCartCouponServiceInterface, DaffCartCouponDriver } from '../drivers/interfaces/cart-coupon-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartCoupon } from '../models/cart-coupon';

@Injectable()
export class DaffCartCouponEffects<
  T extends DaffCart = DaffCart,
  V extends DaffCartCoupon = DaffCartCoupon
> {
  constructor(
    private actions$: Actions,
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
      catchError(error => of(error.name === DaffStorageServiceError.name
        ? new DaffCartStorageFailure('Cart Storage Failed')
        : new DaffCartCouponApplyFailure('Failed to apply coupon to cart')
      )),
    )),
  )

  @Effect()
  list$ = this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponListAction),
    switchMap((action: DaffCartCouponList) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.list(cartId)),
      map(resp => new DaffCartCouponListSuccess<V>(resp)),
      catchError(error => of(error.name === DaffStorageServiceError.name
        ? new DaffCartStorageFailure('Cart Storage Failed')
        : new DaffCartCouponListFailure('Failed to list coupons')
      )),
    )),
  )

  @Effect()
  remove$ = this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponRemoveAction),
    switchMap((action: DaffCartCouponRemove<V>) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.remove(cartId, action.payload)),
      map(resp => new DaffCartCouponRemoveSuccess(resp)),
      catchError(error => of(error.name === DaffStorageServiceError.name
        ? new DaffCartStorageFailure('Cart Storage Failed')
        : new DaffCartCouponRemoveFailure('Failed to remove a coupon from the cart')
      )),
    )),
  )

  @Effect()
  removeAll$ = this.actions$.pipe(
    ofType(DaffCartCouponActionTypes.CartCouponRemoveAllAction),
    switchMap((action: DaffCartCouponRemoveAll) => of(null).pipe(
      map(() => this.storage.getCartId()),
      switchMap(cartId => this.driver.removeAll(cartId)),
      map(resp => new DaffCartCouponRemoveAllSuccess(resp)),
      catchError(error => of(error.name === DaffStorageServiceError.name
        ? new DaffCartStorageFailure('Cart Storage Failed')
        : new DaffCartCouponRemoveAllFailure('Failed to remove all coupons from the cart')
      )),
    )),
  )
}
