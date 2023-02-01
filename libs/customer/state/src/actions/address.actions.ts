import { Action } from '@ngrx/store';

import { DaffIdentifiable } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';
import {
  DaffCustomer,
  DaffCustomerAddress,
} from '@daffodil/customer';

/**
 * The customer address action types enum.
 */
export enum DaffCustomerAddressActionTypes {
  AddressListAction = '[@daffodil/customer] Address List Action',
  AddressListSuccessAction = '[@daffodil/customer] Address List Success Action',
  AddressListFailureAction = '[@daffodil/customer] Address List Failure Action',
  AddressLoadAction = '[@daffodil/customer] Address Load Action',
  AddressLoadSuccessAction = '[@daffodil/customer] Address Load Success Action',
  AddressLoadFailureAction = '[@daffodil/customer] Address Load Failure Action',
  AddressAddAction = '[@daffodil/customer] Address Add Action',
  AddressAddSuccessAction = '[@daffodil/customer] Address Add Success Action',
  AddressAddFailureAction = '[@daffodil/customer] Address Add Failure Action',
  AddressUpdateAction = '[@daffodil/customer] Address Update Action',
  AddressUpdateSuccessAction = '[@daffodil/customer] Address Update Success Action',
  AddressUpdateFailureAction = '[@daffodil/customer] Address Update Failure Action',
  AddressDeleteAction = '[@daffodil/customer] Address Delete Action',
  AddressDeleteSuccessAction = '[@daffodil/customer] Address Delete Success Action',
  AddressDeleteFailureAction = '[@daffodil/customer] Address Delete Failure Action',
}

/**
 * Lists the addresses of the current customer.
 *
 * @param addressId The ID of the address.
 */
export class DaffCustomerAddressList implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressListAction;

  constructor() {}
}

/**
 * Indicates a successful listing of customer addresses.
 */
export class DaffCustomerAddressListSuccess<T extends DaffCustomerAddress = DaffCustomerAddress> implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressListSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * A failed customer address list with the error message.
 */
export class DaffCustomerAddressListFailure implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressListFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Loads an address of the current customer.
 *
 * @param addressId The ID of the address.
 */
export class DaffCustomerAddressLoad implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressLoadAction;

  constructor(public addressId: DaffCustomerAddress['id']) {}
}

/**
 * Indicates a successful load of a customer address.
 */
export class DaffCustomerAddressLoadSuccess<T extends DaffCustomerAddress = DaffCustomerAddress> implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * A failed customer address load with the error message.
 */
export class DaffCustomerAddressLoadFailure implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressLoadFailureAction;

  constructor(public payload: DaffStateError, public id: DaffCustomer['id']) {}
}

/**
 * Updates one of the currently logged-in customer's addresses.
 *
 * @param query The customer query.
 */
export class DaffCustomerAddressUpdate<T extends DaffCustomerAddress = DaffCustomerAddress> implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressUpdateAction;

  constructor(public address: Partial<T> & DaffIdentifiable) {}
}

/**
 * Indicates a successful update of one of the currently logged-in customer's addresses.
 */
export class DaffCustomerAddressUpdateSuccess<T extends DaffCustomerAddress = DaffCustomerAddress> implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressUpdateSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * A failed address update with the error message.
 */
export class DaffCustomerAddressUpdateFailure implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressUpdateFailureAction;

  constructor(public payload: DaffStateError, public id: DaffCustomer['id']) {}
}

/**
 * Adds one of the currently logged-in customer's addresses.
 *
 * @param query The customer query.
 */
export class DaffCustomerAddressAdd<T extends DaffCustomerAddress = DaffCustomerAddress> implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressAddAction;

  constructor(public address: T, public placeholderId?: string) {}
}

/**
 * Indicates a successful addition of one of the currently logged-in customer's addresses.
 *
 * @param payload The updated list of customer addresses.
 */
export class DaffCustomerAddressAddSuccess<T extends DaffCustomerAddress = DaffCustomerAddress> implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressAddSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * A failed address addition with the error message.
 */
export class DaffCustomerAddressAddFailure implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressAddFailureAction;

  constructor(public payload: DaffStateError, public id: DaffCustomer['id']) {}
}

/**
 * Deletes one of the currently logged-in customer's addresses.
 *
 * @param addressId The ID of the address.
 */
export class DaffCustomerAddressDelete implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressDeleteAction;

  constructor(public addressId: DaffCustomerAddress['id']) {}
}

/**
 * Indicates a successful deletion of one of the currently logged-in customer's addresses.
 *
 * @param payload The updated list of customer addresses.
 */
export class DaffCustomerAddressDeleteSuccess<T extends DaffCustomerAddress = DaffCustomerAddress> implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressDeleteSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * A failed address deletion with the error message.
 */
export class DaffCustomerAddressDeleteFailure implements Action {
  readonly type = DaffCustomerAddressActionTypes.AddressDeleteFailureAction;

  constructor(public payload: DaffStateError, public id: DaffCustomer['id']) {}
}

/**
 * A union of the customer action types.
 */
export type DaffCustomerAddressActions<
  T extends DaffCustomerAddress = DaffCustomerAddress,
> =
  | DaffCustomerAddressList
  | DaffCustomerAddressListSuccess<T>
  | DaffCustomerAddressListFailure
  | DaffCustomerAddressLoad
  | DaffCustomerAddressLoadSuccess<T>
  | DaffCustomerAddressLoadFailure
  | DaffCustomerAddressUpdate<T>
  | DaffCustomerAddressUpdateSuccess<T>
  | DaffCustomerAddressUpdateFailure
  | DaffCustomerAddressAdd<T>
  | DaffCustomerAddressAddSuccess<T>
  | DaffCustomerAddressAddFailure
  | DaffCustomerAddressDelete
  | DaffCustomerAddressDeleteSuccess
  | DaffCustomerAddressDeleteFailure;
