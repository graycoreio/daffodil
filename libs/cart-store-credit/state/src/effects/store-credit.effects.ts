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

import { DaffCartStorageService } from '@daffodil/cart';
import { DaffCartStorageFailure } from '@daffodil/cart/state';
import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import {
  DaffCartStoreCreditDriver,
  DaffCartStoreCreditDriverInterface,
} from '@daffodil/cart-store-credit/driver';
import {
  DAFF_STORAGE_SERVICE_ERROR_CODE,
  catchAndArrayifyErrors,
} from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartStoreCreditActionTypes,
  DaffCartStoreCreditApplyFailure,
  DaffCartStoreCreditApplySuccess,
  DaffCartStoreCreditActions,
  DaffCartStoreCreditRemoveFailure,
  DaffCartStoreCreditRemoveSuccess,
} from '../actions/store-credit.actions';
import { DAFF_CART_STORE_CREDIT_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartStoreCreditEffects<
  T extends DaffCartWithStoreCredit = DaffCartWithStoreCredit,
> {
  constructor(
    private actions$: Actions<DaffCartStoreCreditActions<T>>,
    @Inject(DaffCartStoreCreditDriver) private driver: DaffCartStoreCreditDriverInterface<T>,
    @Inject(DAFF_CART_STORE_CREDIT_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    private storage: DaffCartStorageService,
  ) {}

  apply$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartStoreCreditActionTypes.StoreCreditApplyAction),
    switchMap((action) =>
      defer(() => of(this.storage.getCartId())).pipe(
        switchMap((cartId) => this.driver.apply(cartId)),
        map(resp => new DaffCartStoreCreditApplySuccess<T>(resp)),
        catchAndArrayifyErrors((error) => of(error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
          ? new DaffCartStorageFailure(error.map(this.errorMatcher))
          : new DaffCartStoreCreditApplyFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));

  remove$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartStoreCreditActionTypes.StoreCreditRemoveAction),
    switchMap((action) =>
      defer(() => of(this.storage.getCartId())).pipe(
        switchMap((cartId) => this.driver.remove(cartId)),
        map(resp => new DaffCartStoreCreditRemoveSuccess<T>(resp)),
        catchAndArrayifyErrors((error) => of(error.find((err) => err.code === DAFF_STORAGE_SERVICE_ERROR_CODE)
          ? new DaffCartStorageFailure(error.map(this.errorMatcher))
          : new DaffCartStoreCreditRemoveFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));
}
