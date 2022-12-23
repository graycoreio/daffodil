import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

/**
 * The customer action types enum.
 */
export enum DaffCustomerActionTypes {
  CustomerLoadAction = '[@daffodil/customer] Customer Load Action',
  CustomerLoadSuccessAction = '[@daffodil/customer] Customer Load Success Action',
  CustomerLoadFailureAction = '[@daffodil/customer] Customer Load Failure Action',
  CustomerUpdateAction = '[@daffodil/customer] Customer Update Action',
  CustomerUpdateSuccessAction = '[@daffodil/customer] Customer Update Success Action',
  CustomerUpdateFailureAction = '[@daffodil/customer] Customer Update Failure Action',
  CustomerChangeEmailAction = '[@daffodil/customer] Customer Change Email Action',
  CustomerChangeEmailSuccessAction = '[@daffodil/customer] Customer Change Email Success Action',
  CustomerChangeEmailFailureAction = '[@daffodil/customer] Customer Change Email Failure Action',
  CustomerChangePasswordAction = '[@daffodil/customer] Customer Change Password Action',
  CustomerChangePasswordSuccessAction = '[@daffodil/customer] Customer Change Password Success Action',
  CustomerChangePasswordFailureAction = '[@daffodil/customer] Customer Change Password Failure Action',
  CustomerClearErrorsAction = '[@daffodil/customer] Customer Clear Errors Action',

}

/**
 * Loads the currently logged-in customer.
 *
 * @param query The customer query.
 */
export class DaffCustomerLoad implements Action {
  readonly type = DaffCustomerActionTypes.CustomerLoadAction;
}

/**
 * Indicates a successful load of the currently logged-in customer.
 */
export class DaffCustomerLoadSuccess<T extends DaffCustomer = DaffCustomer> implements Action {
  readonly type = DaffCustomerActionTypes.CustomerLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * A failed customer load with the error message.
 */
export class DaffCustomerLoadFailure implements Action {
  readonly type = DaffCustomerActionTypes.CustomerLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Updates the currently logged-in customer.
 *
 * @param query The customer query.
 */
export class DaffCustomerUpdate<T extends DaffCustomer = DaffCustomer> implements Action {
  readonly type = DaffCustomerActionTypes.CustomerUpdateAction;

  constructor(public customer: Partial<T>) {}
}

/**
 * Indicates a successful update of the currently logged-in customer.
 */
export class DaffCustomerUpdateSuccess<T extends DaffCustomer = DaffCustomer> implements Action {
  readonly type = DaffCustomerActionTypes.CustomerUpdateSuccessAction;

  constructor(public payload: T) {}
}

/**
 * A failed customer update with the error message.
 */
export class DaffCustomerUpdateFailure implements Action {
  readonly type = DaffCustomerActionTypes.CustomerUpdateFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Changes the email of the currently logged-in customer.
 *
 * @param query The customer query.
 */
export class DaffCustomerChangeEmail implements Action {
  readonly type = DaffCustomerActionTypes.CustomerChangeEmailAction;

  constructor(public email: string, public password: string) {}
}

/**
 * Indicates a successful email change of the currently logged-in customer.
 */
export class DaffCustomerChangeEmailSuccess<T extends DaffCustomer = DaffCustomer> implements Action {
  readonly type = DaffCustomerActionTypes.CustomerChangeEmailSuccessAction;

  constructor(public payload: T) {}
}

/**
 * A failed customer email change with the error message.
 */
export class DaffCustomerChangeEmailFailure implements Action {
  readonly type = DaffCustomerActionTypes.CustomerChangeEmailFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Changes the password of the currently logged-in customer.
 *
 * @param query The customer query.
 */
export class DaffCustomerChangePassword implements Action {
  readonly type = DaffCustomerActionTypes.CustomerChangePasswordAction;

  constructor(public newPassword: string, public oldPassword: string) {}
}

/**
 * Indicates a successful password change of the currently logged-in customer.
 */
export class DaffCustomerChangePasswordSuccess implements Action {
  readonly type = DaffCustomerActionTypes.CustomerChangePasswordSuccessAction;
}

/**
 * A failed customer password change with the error message.
 */
export class DaffCustomerChangePasswordFailure implements Action {
  readonly type = DaffCustomerActionTypes.CustomerChangePasswordFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * An action to clear all customer errors in state.
 */
export class DaffCustomerClearErrors implements Action {
  readonly type = DaffCustomerActionTypes.CustomerClearErrorsAction;
}

/**
 * A union of the customer action types.
 */
export type DaffCustomerActions<
  T extends DaffCustomer = DaffCustomer,
> =
  | DaffCustomerLoad
  | DaffCustomerLoadSuccess<T>
  | DaffCustomerLoadFailure
  | DaffCustomerUpdate
  | DaffCustomerUpdateSuccess<T>
  | DaffCustomerUpdateFailure
  | DaffCustomerChangeEmail
  | DaffCustomerChangeEmailSuccess<T>
  | DaffCustomerChangeEmailFailure
  | DaffCustomerChangePassword
  | DaffCustomerChangePasswordSuccess
  | DaffCustomerChangePasswordFailure
  | DaffCustomerClearErrors;
