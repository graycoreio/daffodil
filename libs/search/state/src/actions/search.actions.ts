import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffSearchResult } from '@daffodil/search';
import {
  DaffSearchDriverOptions,
  DaffSearchDriverResponse,
} from '@daffodil/search/driver';

/**
 * The search action types enum.
 */
export enum DaffSearchActionTypes {
  SearchLoadAction = '[@daffodil/search] Search Load Action',
  SearchLoadSuccessAction = '[@daffodil/search] Search Load Success Action',
  SearchLoadFailureAction = '[@daffodil/search] Search Load Failure Action',
  SearchIncrementalAction = '[@daffodil/search] Search Incremental Action',
  SearchIncrementalSuccessAction = '[@daffodil/search] Search Incremental Success Action',
  SearchIncrementalFailureAction = '[@daffodil/search] Search Incremental Failure Action',
}

/**
 * Searches for the specified phrase.
 *
 * @param query The search query.
 */
export class DaffSearchLoad implements Action {
  readonly type = DaffSearchActionTypes.SearchLoadAction;

  constructor(public query: string, public options: DaffSearchDriverOptions = {}) {}
}

/**
 * A successful search with the dictionary of results.
 */
export class DaffSearchLoadSuccess<T extends DaffSearchResult = DaffSearchResult> implements Action {
  readonly type = DaffSearchActionTypes.SearchLoadSuccessAction;

  constructor(public payload: DaffSearchDriverResponse<T>) {}
}

/**
 * A failed search with the error message.
 */
export class DaffSearchLoadFailure implements Action {
  readonly type = DaffSearchActionTypes.SearchLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Searches for the specified phrase.
 * Automatically applies a result limit and
 * does not save the search query in state.
 *
 * @param query The search query.
 */
export class DaffSearchIncremental implements Action {
  readonly type = DaffSearchActionTypes.SearchIncrementalAction;

  constructor(public query: string, public options: DaffSearchDriverOptions = {}) {}
}

/**
 * A successful search with the dictionary of results.
 */
export class DaffSearchIncrementalSuccess<T extends DaffSearchResult = DaffSearchResult> implements Action {
  readonly type = DaffSearchActionTypes.SearchIncrementalSuccessAction;

  constructor(public payload: DaffSearchDriverResponse<T>) {}
}

/**
 * A failed search with the error message.
 */
export class DaffSearchIncrementalFailure implements Action {
  readonly type = DaffSearchActionTypes.SearchIncrementalFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * A union of the search action types.
 */
export type DaffSearchActions<
  T extends DaffSearchResult = DaffSearchResult,
> =
  | DaffSearchLoad
  | DaffSearchLoadSuccess<T>
  | DaffSearchLoadFailure
  | DaffSearchIncremental
  | DaffSearchIncrementalSuccess<T>
  | DaffSearchIncrementalFailure;
