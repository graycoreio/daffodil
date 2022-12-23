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
}

/**
 * Generates a customer token.
 *
 * @param query The customer query.
 */
export class DaffCustomerLoad implements Action {
  readonly type = DaffCustomerActionTypes.CustomerLoadAction;

  constructor() {}
}

/**
 * Indicates a successful generation of a customer token.
 */
export class DaffCustomerLoadSuccess<T extends DaffCustomer = DaffCustomer> implements Action {
  readonly type = DaffCustomerActionTypes.CustomerLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * A failed customer with the error message.
 */
export class DaffCustomerLoadFailure implements Action {
  readonly type = DaffCustomerActionTypes.CustomerLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * A union of the customer action types.
 */
export type DaffCustomerActions<
  T extends DaffCustomer = DaffCustomer,
> =
  | DaffCustomerLoad
  | DaffCustomerLoadSuccess<T>
  | DaffCustomerLoadFailure;
