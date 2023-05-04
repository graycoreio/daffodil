import { Action } from '@ngrx/store';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

/**
 * The customer store credit action types enum.
 */
export enum DaffCustomerStoreCreditActionTypes {
  StoreCreditLoadAction = '[@daffodil/customer-store-credit] Store Credit Load Action',
  StoreCreditLoadSuccessAction = '[@daffodil/customer-store-credit] Store Credit Load Success Action',
  StoreCreditLoadFailureAction = '[@daffodil/customer-store-credit] Store Credit Load Failure Action',
  StoreCreditClearErrorsAction = '[@daffodil/customer-store-credit] Store Credit Clear Errors Action',
}

/**
 * Loads the store credit of the current customer.
 */
export class DaffCustomerStoreCreditLoad implements Action {
  readonly type = DaffCustomerStoreCreditActionTypes.StoreCreditLoadAction;
}

/**
 * Indicates a successful load of the customer's store credit.
 */
export class DaffCustomerStoreCreditLoadSuccess<T extends DaffCustomerStoreCredit = DaffCustomerStoreCredit> implements Action {
  readonly type = DaffCustomerStoreCreditActionTypes.StoreCreditLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * A failed customer store credit load with the error message.
 */
export class DaffCustomerStoreCreditLoadFailure implements Action {
  readonly type = DaffCustomerStoreCreditActionTypes.StoreCreditLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * An action to clear all errors in state.
 */
export class DaffCustomerStoreCreditClearErrors implements Action {
  readonly type = DaffCustomerStoreCreditActionTypes.StoreCreditClearErrorsAction;
}

/**
 * A union of the customer action types.
 */
export type DaffCustomerStoreCreditActions<
  TStoreCredit extends DaffCustomerStoreCredit = DaffCustomerStoreCredit,
> =
  | DaffCustomerStoreCreditLoad
  | DaffCustomerStoreCreditLoadSuccess<TStoreCredit>
  | DaffCustomerStoreCreditLoadFailure
  | DaffCustomerStoreCreditClearErrors;
