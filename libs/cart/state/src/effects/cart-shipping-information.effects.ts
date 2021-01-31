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
  DaffCartShippingInformation,
  DaffCart,
  DaffCartStorageService,
  DAFF_CART_ERROR_MATCHER,
} from '@daffodil/cart';
import {
  DaffCartShippingInformationDriver,
  DaffCartShippingInformationServiceInterface,
} from '@daffodil/cart/driver';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartShippingInformationActionTypes,
  DaffCartShippingInformationLoad,
  DaffCartShippingInformationLoadSuccess,
  DaffCartShippingInformationLoadFailure,
  DaffCartShippingInformationDelete,
  DaffCartShippingInformationDeleteSuccess,
  DaffCartShippingInformationDeleteFailure,
  DaffCartShippingInformationUpdate,
  DaffCartShippingInformationUpdateSuccess,
  DaffCartShippingInformationUpdateFailure,
} from '../actions/public_api';

@Injectable()
export class DaffCartShippingInformationEffects<T extends DaffCartShippingInformation, V extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartShippingInformationDriver) private driver: DaffCartShippingInformationServiceInterface<T, V>,
    private storage: DaffCartStorageService,
  ) {}

  @Effect()
  get$ = this.actions$.pipe(
    ofType(DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction),
    switchMap((action: DaffCartShippingInformationLoad) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp: T) => new DaffCartShippingInformationLoadSuccess(resp)),
        catchError(error => of(new DaffCartShippingInformationLoadFailure(this.errorMatcher(error)))),
      ),
    ),
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType(DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction),
    switchMap((action: DaffCartShippingInformationUpdate<T>) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp: V) => new DaffCartShippingInformationUpdateSuccess(resp)),
        catchError(error => of(new DaffCartShippingInformationUpdateFailure(this.errorMatcher(error)))),
      ),
    ),
  );

  @Effect()
  delete$ = this.actions$.pipe(
    ofType(DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction),
    switchMap((action: DaffCartShippingInformationDelete<V['shipping_information']>) =>
      this.driver.delete(this.storage.getCartId()).pipe(
        map((resp: V) => new DaffCartShippingInformationDeleteSuccess(resp)),
        catchError(error => of(new DaffCartShippingInformationDeleteFailure(this.errorMatcher(error)))),
      ),
    ),
  );
}
