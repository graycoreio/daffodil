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
  catchError,
} from 'rxjs/operators';

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffCustomerStoreCredit,
  DAFF_CUSTOMER_STORE_CREDIT_ERROR_MATCHER,
} from '@daffodil/customer-store-credit';
import {
  DaffCustomerStoreCreditDriver,
  DaffCustomerStoreCreditDriverInterface,
} from '@daffodil/customer-store-credit/driver';

import {
  DaffCustomerStoreCreditActionTypes,
  DaffCustomerStoreCreditLoadFailure,
  DaffCustomerStoreCreditLoadSuccess,
  DaffCustomerStoreCreditActions,
} from '../actions/store-credit.actions';

@Injectable()
export class DaffCustomerStoreCreditEffects<
  T extends DaffCustomerStoreCredit = DaffCustomerStoreCredit,
> {
  constructor(
    private actions$: Actions<DaffCustomerStoreCreditActions<T>>,
    @Inject(DaffCustomerStoreCreditDriver) private driver: DaffCustomerStoreCreditDriverInterface<T>,
    @Inject(DAFF_CUSTOMER_STORE_CREDIT_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerStoreCreditActionTypes.StoreCreditLoadAction),
    switchMap((action) =>
      this.driver.get().pipe(
        map(resp => new DaffCustomerStoreCreditLoadSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerStoreCreditLoadFailure(this.errorMatcher(error)))),
      ),
    ),
  ));
}
