import { Action } from '@ngrx/store';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCustomerAddress } from '@daffodil/customer';
import {
  DaffCustomerPayment,
  DaffCustomerPaymentRequest,
} from '@daffodil/customer-payment';
import { DaffPersonalAddress } from '@daffodil/geography';

/**
 * The customer payment action types enum.
 */
export enum DaffCustomerPaymentActionTypes {
  PaymentListAction = '[@daffodil/customer-payment] Payment List Action',
  PaymentListSuccessAction = '[@daffodil/customer-payment] Payment List Success Action',
  PaymentListFailureAction = '[@daffodil/customer-payment] Payment List Failure Action',
  PaymentLoadAction = '[@daffodil/customer-payment] Payment Load Action',
  PaymentLoadSuccessAction = '[@daffodil/customer-payment] Payment Load Success Action',
  PaymentLoadFailureAction = '[@daffodil/customer-payment] Payment Load Failure Action',
  PaymentAddAction = '[@daffodil/customer-payment] Payment Add Action',
  PaymentAddSuccessAction = '[@daffodil/customer-payment] Payment Add Success Action',
  PaymentAddFailureAction = '[@daffodil/customer-payment] Payment Add Failure Action',
  PaymentUpdateAction = '[@daffodil/customer-payment] Payment Update Action',
  PaymentUpdateSuccessAction = '[@daffodil/customer-payment] Payment Update Success Action',
  PaymentUpdateFailureAction = '[@daffodil/customer-payment] Payment Update Failure Action',
  PaymentDeleteAction = '[@daffodil/customer-payment] Payment Delete Action',
  PaymentDeleteSuccessAction = '[@daffodil/customer-payment] Payment Delete Success Action',
  PaymentDeleteFailureAction = '[@daffodil/customer-payment] Payment Delete Failure Action',
  PaymentClearErrorsAction = '[@daffodil/customer-payment] Payment Clear Errors Action',
}

/**
 * Lists the payments of the current customer.
 *
 * @param paymentId The ID of the payment.
 */
export class DaffCustomerPaymentList implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentListAction;

  constructor() {}
}

/**
 * Indicates a successful listing of customer payments.
 */
export class DaffCustomerPaymentListSuccess<T extends DaffCustomerPayment = DaffCustomerPayment> implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentListSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * A failed customer payment list with the error message.
 */
export class DaffCustomerPaymentListFailure implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentListFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Loads an payment of the current customer.
 *
 * @param paymentId The ID of the payment.
 */
export class DaffCustomerPaymentLoad implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentLoadAction;

  constructor(public paymentId: DaffCustomerPayment['id']) {}
}

/**
 * Indicates a successful load of a customer payment.
 */
export class DaffCustomerPaymentLoadSuccess<T extends DaffCustomerPayment = DaffCustomerPayment> implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * A failed customer payment load with the error message.
 */
export class DaffCustomerPaymentLoadFailure implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentLoadFailureAction;

  constructor(public payload: DaffStateError, public id: DaffCustomerPayment['id']) {}
}

/**
 * Updates one of the currently logged-in customer's payments.
 *
 * @param query The customer query.
 */
export class DaffCustomerPaymentUpdate<T extends DaffCustomerPayment = DaffCustomerPayment> implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentUpdateAction;

  constructor(public payment: Partial<T> & DaffIdentifiable) {}
}

/**
 * Indicates a successful update of one of the currently logged-in customer's payments.
 */
export class DaffCustomerPaymentUpdateSuccess<T extends DaffCustomerPayment = DaffCustomerPayment> implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentUpdateSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * A failed payment update with the error message.
 */
export class DaffCustomerPaymentUpdateFailure implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentUpdateFailureAction;

  constructor(public payload: DaffStateError, public id: DaffCustomerPayment['id']) {}
}

/**
 * Adds one of the currently logged-in customer's payments.
 *
 * @param query The customer query.
 */
export class DaffCustomerPaymentAdd<T extends DaffCustomerPaymentRequest = DaffCustomerPaymentRequest> implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentAddAction;

  constructor(public payment: T, public placeholderId?: string) {}
}

/**
 * Indicates a successful addition of one of the currently logged-in customer's payments.
 *
 * @param payload The updated list of customer payments.
 */
export class DaffCustomerPaymentAddSuccess<T extends DaffCustomerPayment = DaffCustomerPayment> implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentAddSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * A failed payment addition with the error message.
 */
export class DaffCustomerPaymentAddFailure implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentAddFailureAction;

  constructor(public payload: DaffStateError, public id: DaffCustomerPayment['id']) {}
}

/**
 * Deletes one of the currently logged-in customer's payments.
 *
 * @param paymentId The ID of the payment.
 */
export class DaffCustomerPaymentDelete implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentDeleteAction;

  constructor(public paymentId: DaffCustomerPayment['id']) {}
}

/**
 * Indicates a successful deletion of one of the currently logged-in customer's payments.
 *
 * @param payload The updated list of customer payments.
 */
export class DaffCustomerPaymentDeleteSuccess<T extends DaffCustomerPayment = DaffCustomerPayment> implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentDeleteSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * A failed payment deletion with the error message.
 */
export class DaffCustomerPaymentDeleteFailure implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentDeleteFailureAction;

  constructor(public payload: DaffStateError, public id: DaffCustomerPayment['id']) {}
}

/**
 * An action to clear all errors in state.
 */
export class DaffCustomerPaymentClearErrors implements Action {
  readonly type = DaffCustomerPaymentActionTypes.PaymentClearErrorsAction;
}

/**
 * A union of the customer action types.
 */
export type DaffCustomerPaymentActions<
  TPayment extends DaffCustomerPayment = DaffCustomerPayment,
  TRequest extends DaffCustomerPaymentRequest = DaffCustomerPaymentRequest,
> =
  | DaffCustomerPaymentList
  | DaffCustomerPaymentListSuccess<TPayment>
  | DaffCustomerPaymentListFailure
  | DaffCustomerPaymentLoad
  | DaffCustomerPaymentLoadSuccess<TPayment>
  | DaffCustomerPaymentLoadFailure
  | DaffCustomerPaymentUpdate<TPayment>
  | DaffCustomerPaymentUpdateSuccess<TPayment>
  | DaffCustomerPaymentUpdateFailure
  | DaffCustomerPaymentAdd<TRequest>
  | DaffCustomerPaymentAddSuccess<TPayment>
  | DaffCustomerPaymentAddFailure
  | DaffCustomerPaymentDelete
  | DaffCustomerPaymentDeleteSuccess
  | DaffCustomerPaymentDeleteFailure
  | DaffCustomerPaymentClearErrors;
