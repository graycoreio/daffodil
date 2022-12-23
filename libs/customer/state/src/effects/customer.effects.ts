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
  DaffCustomer,
  DAFF_CUSTOMER_ERROR_MATCHER,
} from '@daffodil/customer';
import {
  DaffCustomerDriverInterface,
  DaffCustomerDriver,
} from '@daffodil/customer/driver';

import {
  DaffCustomerActionTypes,
  DaffCustomerLoad,
  DaffCustomerLoadSuccess,
  DaffCustomerLoadFailure,
} from '../actions/customer.actions';

@Injectable()
export class DaffCustomerEffects<
  T extends DaffCustomer = DaffCustomer,
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCustomerDriver) private driver: DaffCustomerDriverInterface<T>,
    @Inject(DAFF_CUSTOMER_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * An effect for the loading of an customer.
   */

  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerActionTypes.CustomerLoadAction),
    switchMap((action: DaffCustomerLoad) =>
      this.driver.get().pipe(
        map(resp => new DaffCustomerLoadSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerLoadFailure(this.errorMatcher(error)))),
      ),
    ),
  ));
}
