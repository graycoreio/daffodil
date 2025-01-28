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
  of,
  EMPTY,
  defer,
} from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  tap,
} from 'rxjs/operators';

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartDriver,
  DaffCartServiceInterface,
} from '@daffodil/cart/driver';
import {
  DAFF_STORAGE_SERVICE_ERROR_CODE,
  DaffStorageServiceError,
  catchAndArrayifyErrors,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartActionTypes,
  DaffCartLoad,
  DaffCartLoadSuccess,
  DaffCartLoadFailure,
  DaffAddToCartSuccess,
  DaffAddToCartFailure,
  DaffAddToCart,
  DaffCartClear,
  DaffCartClearSuccess,
  DaffCartClearFailure,
  DaffCartCreate,
  DaffCartCreateSuccess,
  DaffCartCreateFailure,
  DaffCartStorageFailure,
  DaffCartLoadPartialSuccess,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartEffects<T extends DaffCart = DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}


  create$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartActionTypes.CartCreateAction),
    switchMap((action: DaffCartCreate) => this.driver.create().pipe(
      map((resp: {id: T['id']}) => new DaffCartCreateSuccess(resp)),
      catchAndArrayifyErrors(error => of(new DaffCartCreateFailure(error.map(this.errorMatcher)))),
    )),
  ));


  storeId$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartActionTypes.CartCreateSuccessAction, DaffCartActionTypes.ResolveCartSuccessAction),
    switchMap((action: DaffCartCreateSuccess<T>) => of(null).pipe(
      tap(() => {
        this.storage.setCartId(action.payload.id);
      }),
      switchMap(() => EMPTY),
      catchAndArrayifyErrors(error => of(new DaffCartStorageFailure(error.map(this.errorMatcher)))),
    )),
  ));


  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartActionTypes.CartLoadAction),
    switchMap((action: DaffCartLoad) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.get(cartId)),
      map(({ response, errors }) => {
        if (errors.length === 0) {
          return new DaffCartLoadSuccess(response);
        }

        const hasOnlyRecoverableErrors = errors.reduce((acc, error) => acc && error.recoverable, true);

        if (hasOnlyRecoverableErrors) {
          return new DaffCartLoadPartialSuccess(response, errors.map(this.errorMatcher));
        }

        return new DaffCartLoadFailure(errors.map(this.errorMatcher));
      }),
      catchAndArrayifyErrors(error => of(error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
        ? new DaffCartStorageFailure(error.map(this.errorMatcher))
        : new DaffCartLoadFailure(error.map(this.errorMatcher)),
      )),
    )),
  ));


  clear$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartActionTypes.CartClearAction),
    switchMap((action: DaffCartClear) => defer(() => of(this.storage.getCartId())).pipe(
      switchMap(cartId => this.driver.clear(cartId)),
      map((resp: T) => new DaffCartClearSuccess(resp)),
      catchAndArrayifyErrors(error => of(error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
        ? new DaffCartStorageFailure(error.map(this.errorMatcher))
        : new DaffCartClearFailure(error.map(this.errorMatcher)),
      )),
    )),
  ));
}
