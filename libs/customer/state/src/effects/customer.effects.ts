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
import { DaffCustomer } from '@daffodil/customer';
import {
  DaffCustomerDriverInterface,
  DaffCustomerDriver,
} from '@daffodil/customer/driver';

import {
  DaffCustomerActionTypes,
  DaffCustomerLoad,
  DaffCustomerLoadSuccess,
  DaffCustomerLoadFailure,
  DaffCustomerUpdate,
  DaffCustomerUpdateFailure,
  DaffCustomerUpdateSuccess,
  DaffCustomerChangeEmail,
  DaffCustomerChangeEmailFailure,
  DaffCustomerChangeEmailSuccess,
  DaffCustomerChangePassword,
  DaffCustomerChangePasswordFailure,
  DaffCustomerChangePasswordSuccess,
} from '../actions/customer.actions';
import { DAFF_CUSTOMER_ERROR_MATCHER } from '../injection-tokens/public_api';

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

  /**
   * An effect for the updating of an customer.
   */
  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerActionTypes.CustomerUpdateAction),
    switchMap((action: DaffCustomerUpdate<T>) =>
      this.driver.update(action.customer).pipe(
        map(resp => new DaffCustomerUpdateSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerUpdateFailure(this.errorMatcher(error)))),
      ),
    ),
  ));

  /**
   * An effect for changing a customer email.
   */
  changeEmail$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerActionTypes.CustomerChangeEmailAction),
    switchMap((action: DaffCustomerChangeEmail) =>
      this.driver.changeEmail(action.email, action.password).pipe(
        map(resp => new DaffCustomerChangeEmailSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerChangeEmailFailure(this.errorMatcher(error)))),
      ),
    ),
  ));

  /**
   * An effect for changing a customer password.
   */
  changePassword$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerActionTypes.CustomerChangePasswordAction),
    switchMap((action: DaffCustomerChangePassword) =>
      this.driver.changePassword(action.oldPassword, action.newPassword).pipe(
        map(() => new DaffCustomerChangePasswordSuccess()),
        catchError((error: DaffError) => of(new DaffCustomerChangePasswordFailure(this.errorMatcher(error)))),
      ),
    ),
  ));
}
