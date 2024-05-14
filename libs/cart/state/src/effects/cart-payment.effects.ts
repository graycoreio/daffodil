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
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartPaymentDriver,
  DaffCartPaymentServiceInterface,
} from '@daffodil/cart/driver';
import { catchAndArrayifyErrors } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartPaymentActionTypes,
  DaffCartPaymentLoadSuccess,
  DaffCartPaymentLoadFailure,
  DaffCartPaymentRemoveSuccess,
  DaffCartPaymentRemoveFailure,
  DaffCartPaymentUpdateSuccess,
  DaffCartPaymentUpdateFailure,
  DaffCartPaymentUpdateWithBillingSuccess,
  DaffCartPaymentUpdateWithBillingFailure,
  DaffCartPaymentActions,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartPaymentEffects<T extends DaffCart = DaffCart> {
  constructor(
    private actions$: Actions<DaffCartPaymentActions<T>>,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartPaymentDriver) private driver: DaffCartPaymentServiceInterface<T>,
    private storage: DaffCartStorageService,
  ) {}


  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentLoadAction),
    switchMap((action) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp) => new DaffCartPaymentLoadSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartPaymentLoadFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));


  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentUpdateAction),
    switchMap((action) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp) => new DaffCartPaymentUpdateSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartPaymentUpdateFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));


  updateWithBilling$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction),
    switchMap((action) =>
      this.driver.update(this.storage.getCartId(), action.payment, action.address).pipe(
        map(resp => new DaffCartPaymentUpdateWithBillingSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartPaymentUpdateWithBillingFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));


  remove$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartPaymentActionTypes.CartPaymentRemoveAction),
    switchMap((action) =>
      this.driver.remove(this.storage.getCartId()).pipe(
        map(() => new DaffCartPaymentRemoveSuccess()),
        catchAndArrayifyErrors(error => of(new DaffCartPaymentRemoveFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));
}
