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
import { DaffCustomerPayment } from '@daffodil/customer-payment';
import {
  DaffCustomerPaymentDriver,
  DaffCustomerPaymentDriverInterface,
} from '@daffodil/customer-payment/driver';

import {
  DaffCustomerPaymentActionTypes,
  DaffCustomerPaymentLoad,
  DaffCustomerPaymentLoadSuccess,
  DaffCustomerPaymentLoadFailure,
  DaffCustomerPaymentUpdate,
  DaffCustomerPaymentUpdateSuccess,
  DaffCustomerPaymentUpdateFailure,
  DaffCustomerPaymentAdd,
  DaffCustomerPaymentAddFailure,
  DaffCustomerPaymentAddSuccess,
  DaffCustomerPaymentDelete,
  DaffCustomerPaymentDeleteFailure,
  DaffCustomerPaymentDeleteSuccess,
  DaffCustomerPaymentList,
  DaffCustomerPaymentListFailure,
  DaffCustomerPaymentListSuccess,
  DaffCustomerPaymentActions,
} from '../actions/payment.actions';
import { DAFF_CUSTOMER_PAYMENT_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCustomerPaymentEffects<
  T extends DaffCustomerPayment = DaffCustomerPayment,
> {
  constructor(
    private actions$: Actions<DaffCustomerPaymentActions<T>>,
    @Inject(DaffCustomerPaymentDriver) private driver: DaffCustomerPaymentDriverInterface<T>,
    @Inject(DAFF_CUSTOMER_PAYMENT_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerPaymentActionTypes.PaymentListAction),
    switchMap((action) =>
      this.driver.list().pipe(
        map(resp => new DaffCustomerPaymentListSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerPaymentListFailure(this.errorMatcher(error)))),
      ),
    ),
  ));

  /**
   * An effect for loading a customer payment.
   */
  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerPaymentActionTypes.PaymentLoadAction),
    switchMap((action) =>
      this.driver.get(action.paymentId).pipe(
        map(resp => new DaffCustomerPaymentLoadSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerPaymentLoadFailure(this.errorMatcher(error), action.paymentId))),
      ),
    ),
  ));

  /**
   * An effect for updating a customer payment.
   */
  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerPaymentActionTypes.PaymentUpdateAction),
    switchMap((action) =>
      this.driver.update(action.payment).pipe(
        map(resp => new DaffCustomerPaymentUpdateSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerPaymentUpdateFailure(this.errorMatcher(error), action.payment.id))),
      ),
    ),
  ));

  /**
   * An effect for adding a new customer payment.
   */
  add$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerPaymentActionTypes.PaymentAddAction),
    switchMap((action) =>
      this.driver.add(action.payment).pipe(
        map(resp => new DaffCustomerPaymentAddSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerPaymentAddFailure(this.errorMatcher(error), action.placeholderId))),
      ),
    ),
  ));

  /**
   * An effect for adding a new customer payment.
   */
  delete$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerPaymentActionTypes.PaymentDeleteAction),
    switchMap((action) =>
      this.driver.delete(action.paymentId).pipe(
        map(resp => new DaffCustomerPaymentDeleteSuccess(resp)),
        catchError((error: DaffError) => of(new DaffCustomerPaymentDeleteFailure(this.errorMatcher(error), action.paymentId))),
      ),
    ),
  ));
}
