import { DaffStateError } from '@daffodil/core/state';
import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '@daffodil/search';

import { DaffSearchReducerState } from './interface';

/**
 * Manages {@link DaffSearchReducerState}.
 */
export class DaffSearchStateReducerAdapter<T extends DaffSearchResult = DaffSearchResult> {
  constructor(
    private state: DaffSearchReducerState<T>,
  ) {}

  /**
   * Begins the search operation flow.
   * Sets loading to true and stores the query in the list of recent searches.
   */
  search(query: string): DaffSearchReducerState<T> {
    // get unique values
    const recent = [...new Set([
      query,
      ...this.state.recent,
    ])];
    return {
      ...this.state,
      loading: true,
      recent,
      results: <Record<T['kind'], T['id'][]>>{},
    };
  }

  /**
   * Stores the results of a completed search.
   * Also sets loading to false and resets errors.
   */
  storeResults(collection: DaffSearchResultCollection<T>): DaffSearchReducerState<T> {
    const results = Object.keys(collection).reduce((acc, k) => {
      if (Object.prototype.hasOwnProperty.call(collection, k)) {
        acc[k] = collection[k].map(({ id }) => id);
      }
      return acc;
    }, <DaffSearchReducerState<T>['results']>{});

    return {
      ...this.state,
      loading: false,
      errors: [],
      results,
    };
  }

  /**
   * Stores the from a failed search.
   * Also sets loading to false.
   */
  storeError(error: DaffStateError): DaffSearchReducerState<T> {
    return {
      ...this.state,
      errors: [
        ...this.state.errors,
        error,
      ],
      loading: false,
      results: <DaffSearchReducerState<T>['results']>{},
    };
  }
}
