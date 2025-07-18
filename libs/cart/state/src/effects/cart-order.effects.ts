import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartOrderResult,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartDriverErrorCodes,
  DaffCartDriverResolveService,
  DaffCartOrderDriver,
  DaffCartOrderServiceInterface,
} from '@daffodil/cart/driver';
import {
  DAFF_STORAGE_SERVICE_ERROR_CODE,
  catchAndArrayifyErrors,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartOrderActionTypes,
  DaffCartPlaceOrderSuccess,
  DaffCartPlaceOrderFailure,
  DaffCartStorageFailure,
  DaffCartCreate,
  DaffCartOrderActions,
  DaffCartPlaceOrderFailureFromOutOfStockProduct,
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
    private getCart: DaffCartDriverResolveService<T>,
    @Inject(DaffCartOrderDriver) private driver: DaffCartOrderServiceInterface<T, R>,
    private storage: DaffCartStorageService,
  ) {}


  placeOrder$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartOrderActionTypes.CartPlaceOrderAction),
    switchMap((action) => this.getCart.getCartIdOrFail().pipe(
      switchMap(cartId => this.driver.placeOrder(cartId, action.payload)),
      map((resp: R) => new DaffCartPlaceOrderSuccess<R>(resp)),
      catchAndArrayifyErrors<DaffCartStorageFailure | DaffCartPlaceOrderFailure | DaffCartPlaceOrderFailureFromOutOfStockProduct<T>>(error =>
        error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
          ? of(new DaffCartStorageFailure(error.map(this.errorMatcher)))
          : error.find((err) => err.code === DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK)
            ? this.getCart.getCartOrFail().pipe(
              map((response) =>
                response.errors.length > 0
                  ? new DaffCartPlaceOrderFailure(error.concat(response.errors).map(this.errorMatcher))
                  : new DaffCartPlaceOrderFailureFromOutOfStockProduct<T>(error.map(this.errorMatcher), response.response),
              ),
              catchAndArrayifyErrors((errors) => of(new DaffCartPlaceOrderFailure(error.concat(errors).map(this.errorMatcher)))),
            )
            : of(new DaffCartPlaceOrderFailure(error.map(this.errorMatcher))),
      ),
    )),
  ));


  resetCart$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartOrderActionTypes.CartPlaceOrderSuccessAction),
    map(() => new DaffCartCreate()),
  ));
}
