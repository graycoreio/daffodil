import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProductCustomAttribute } from '@daffodil/product';

/**
 * The product custom attributes action types enum.
 */
export enum DaffProductCustomAttributesActionTypes {
  Search = '[@daffodil/product] Product Custom Attributes Search Action',
  SearchSuccess = '[@daffodil/product] Product Custom Attributes Search Success Action',
  SearchFailure = '[@daffodil/product] Product Custom Attributes Search Failure Action',
}

/**
 * Searches for the product custom attributes with the given IDs.
 */
export class DaffProductCustomAttributesSearch implements Action {
  readonly type = DaffProductCustomAttributesActionTypes.Search;

  constructor(public payload: Array<DaffProductCustomAttribute['id']>) {}
}

/**
 * Indicates a successful search of product custom attributes.
 */
export class DaffProductCustomAttributesSearchSuccess implements Action {
  readonly type = DaffProductCustomAttributesActionTypes.SearchSuccess;

  constructor(public payload: DaffProductCustomAttribute[]) {}
}

/**
 * A failed product custom attributes search with the error message.
 */
export class DaffProductCustomAttributesSearchFailure implements Action {
  readonly type = DaffProductCustomAttributesActionTypes.SearchFailure;

  constructor(public payload: DaffStateError) {}
}

/**
 * A union of the product custom attributes action types.
 */
export type DaffProductCustomAttributesActions =
  | DaffProductCustomAttributesSearch
  | DaffProductCustomAttributesSearchSuccess
  | DaffProductCustomAttributesSearchFailure;
