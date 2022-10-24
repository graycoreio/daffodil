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
  mapTo,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartOrderResult,
  DaffCartStorageService,
  DAFF_CART_ERROR_MATCHER,
} from '@daffodil/cart';
import {
  DaffCartOrderDriver,
  DaffCartOrderServiceInterface,
} from '@daffodil/cart/driver';
import { DaffStorageServiceError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartOrderActionTypes,
  DaffCartPlaceOrder,
  DaffCartPlaceOrderSuccess,
  DaffCartPlaceOrderFailure,
  DaffCartStorageFailure,
  DaffCartCreate,
} from '../actions/public_api';

@Injectable()
export class DaffCartOrderEffects<
  T extends DaffCart = DaffCart,
  V extends DaffCartPaymentMethod = DaffCartPaymentMethod,
  R extends DaffCartOrderResult = DaffCartOrderResult
> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartOrderDriver) private driver: DaffCartOrderServiceInterface<T, V, R>,
    private storage: DaffCartStorageService,
  ) {}


  placeOrder$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartOrderActionTypes.CartPlaceOrderAction),
    switchMap((action: DaffCartPlaceOrder<V>) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.placeOrder(cartId, action.payload)),
      map((resp: R) => new DaffCartPlaceOrderSuccess<R>(resp)),
      catchError(error => of(error instanceof DaffStorageServiceError
        ? new DaffCartStorageFailure(this.errorMatcher(error))
        : new DaffCartPlaceOrderFailure(this.errorMatcher(error)),
      )),
    )),
  ));


  resetCart$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartOrderActionTypes.CartPlaceOrderSuccessAction),
    mapTo(new DaffCartCreate()),
  ));
}
