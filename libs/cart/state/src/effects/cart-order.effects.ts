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
  DaffCartPaymentMethod,
  DaffCartOrderResult,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartOrderDriver,
  DaffCartOrderServiceInterface,
} from '@daffodil/cart/driver';
import {
  DAFF_STORAGE_SERVICE_ERROR_CODE,
  DaffStorageServiceError,
  catchAndArrayifyErrors,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartOrderActionTypes,
  DaffCartPlaceOrder,
  DaffCartPlaceOrderSuccess,
  DaffCartPlaceOrderFailure,
  DaffCartStorageFailure,
  DaffCartCreate,
  DaffCartOrderActions,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartOrderEffects<
  T extends DaffCart = DaffCart,
  R extends DaffCartOrderResult = DaffCartOrderResult
> {
  constructor(
    private actions$: Actions<DaffCartOrderActions>,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartOrderDriver) private driver: DaffCartOrderServiceInterface<T, R>,
    private storage: DaffCartStorageService,
  ) {}


  placeOrder$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartOrderActionTypes.CartPlaceOrderAction),
    switchMap((action) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.placeOrder(cartId, action.payload)),
      map((resp: R) => new DaffCartPlaceOrderSuccess<R>(resp)),
      catchAndArrayifyErrors(error => of(error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
        ? new DaffCartStorageFailure(error.map(this.errorMatcher))
        : new DaffCartPlaceOrderFailure(error.map(this.errorMatcher)),
      )),
    )),
  ));


  resetCart$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartOrderActionTypes.CartPlaceOrderSuccessAction),
    map(() => new DaffCartCreate()),
  ));
}
