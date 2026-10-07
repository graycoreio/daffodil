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

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartDriverErrorCodes,
  DaffCartDriverResolveService,
} from '@daffodil/cart/driver';
import {
  DaffCartStorageFailure,
  DaffCartCreate,
} from '@daffodil/cart/state';
import { DaffCheckoutOrderResult } from '@daffodil/checkout';
import {
  DaffCheckoutOrderDriver,
  DaffCheckoutOrderServiceInterface,
} from '@daffodil/checkout/driver';
import {
  DAFF_STORAGE_SERVICE_ERROR_CODE,
  catchAndArrayifyErrors,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import { DAFF_CHECKOUT_ERROR_MATCHER } from '../../injection-tokens/public_api';
import {
  DaffCheckoutOrderActions,
  DaffCheckoutOrderActionTypes,
  DaffCheckoutPlaceOrderFailure,
  DaffCheckoutPlaceOrderFailureFromOutOfStockProduct,
  DaffCheckoutPlaceOrderSuccess,
} from '../actions/public_api';

@Injectable()
export class DaffCheckoutOrderEffects<
  T extends DaffCart = DaffCart,
  R extends DaffCheckoutOrderResult = DaffCheckoutOrderResult
> {
  constructor(
    private actions$: Actions<DaffCheckoutOrderActions>,
    @Inject(DAFF_CHECKOUT_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private getCart: DaffCartDriverResolveService<T>,
    @Inject(DaffCheckoutOrderDriver) private driver: DaffCheckoutOrderServiceInterface<R>,
  ) {}


  placeOrder$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCheckoutOrderActionTypes.PlaceOrderAction),
    switchMap((action) => this.getCart.getCartIdOrFail().pipe(
      switchMap(cartId => this.driver.placeOrder(cartId)),
      map((resp: R) => new DaffCheckoutPlaceOrderSuccess<R>(resp)),
      catchAndArrayifyErrors<DaffCartStorageFailure | DaffCheckoutPlaceOrderFailure | DaffCheckoutPlaceOrderFailureFromOutOfStockProduct<T>>(error =>
        error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
          ? of(new DaffCartStorageFailure(error.map(this.errorMatcher)))
          : error.find((err) => err.code === DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK)
            ? this.getCart.getCartOrFail().pipe(
              map((response) =>
                response.errors.length > 0
                  ? new DaffCheckoutPlaceOrderFailure(error.concat(response.errors).map(this.errorMatcher))
                  : new DaffCheckoutPlaceOrderFailureFromOutOfStockProduct<T>(error.map(this.errorMatcher), response.response),
              ),
              catchAndArrayifyErrors((errors) => of(new DaffCheckoutPlaceOrderFailure(error.concat(errors).map(this.errorMatcher)))),
            )
            : of(new DaffCheckoutPlaceOrderFailure(error.map(this.errorMatcher))),
      ),
    )),
  ));


  resetCart$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCheckoutOrderActionTypes.PlaceOrderSuccessAction),
    map(() => new DaffCartCreate()),
  ));
}
