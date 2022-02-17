import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '@daffodil/search';

/**
 * The search action types enum.
 */
export enum DaffSearchActionTypes {
  SearchLoadAction = '[@daffodil/search] Search Load Action',
  SearchLoadSuccessAction = '[@daffodil/search] Search Load Success Action',
  SearchLoadFailureAction = '[@daffodil/search] Search Load Failure Action',
}

/**
 * Searches for the specified phrase.
 *
 * @param query The search query.
 */
export class DaffSearchLoad implements Action {
  readonly type = DaffSearchActionTypes.SearchLoadAction;

  constructor(public query: string) {}
}

/**
 * A successful search with the dictionary of results.
 */
export class DaffSearchLoadSuccess<T extends DaffSearchResult = DaffSearchResult> implements Action {
  readonly type = DaffSearchActionTypes.SearchLoadSuccessAction;

  constructor(public payload: DaffSearchResultCollection<T>) {}
}

/**
 * A failed search with the error message.
 */
export class DaffSearchLoadFailure implements Action {
  readonly type = DaffSearchActionTypes.SearchLoadFailureAction;

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
  | DaffSearchLoadFailure;
