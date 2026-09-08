import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProductCustomAttribute } from '@daffodil/product';

/**
 * The product custom attributes action types enum.
 */
export enum DaffProductCustomAttributesActionTypes {
  List = '[@daffodil/product] Product Custom Attributes List Action',
  ListSuccess = '[@daffodil/product] Product Custom Attributes List Success Action',
  ListFailure = '[@daffodil/product] Product Custom Attributes List Failure Action',
}

/**
 * Lists the available product custom attributes.
 */
export class DaffProductCustomAttributesList implements Action {
  readonly type = DaffProductCustomAttributesActionTypes.List;
}

/**
 * Indicates a successful listing of product custom attributes.
 */
export class DaffProductCustomAttributesListSuccess implements Action {
  readonly type = DaffProductCustomAttributesActionTypes.ListSuccess;

  constructor(public payload: DaffProductCustomAttribute[]) {}
}

/**
 * A failed product custom attributes list with the error message.
 */
export class DaffProductCustomAttributesListFailure implements Action {
  readonly type = DaffProductCustomAttributesActionTypes.ListFailure;

  constructor(public payload: DaffStateError) {}
}

/**
 * A union of the product custom attributes action types.
 */
export type DaffProductCustomAttributesActions =
  | DaffProductCustomAttributesList
  | DaffProductCustomAttributesListSuccess
  | DaffProductCustomAttributesListFailure;
