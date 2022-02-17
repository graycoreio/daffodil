import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffSearchResult } from '@daffodil/search';

import {
  DaffSearchStateRootSlice,
  DaffSearchReducersState,
  DAFF_SEARCH_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Selector for the search feature state.
 */
export interface DaffSearchFeatureSelector<T extends DaffSearchResult = DaffSearchResult> {
  selectSearchFeatureState: MemoizedSelector<DaffSearchStateRootSlice<T>, DaffSearchReducersState<T>>;
}

export const getDaffSearchReducersStateSelector = (() => {
  let cache;
  return <T extends DaffSearchResult = DaffSearchResult>(): DaffSearchFeatureSelector<T> =>
    cache = cache || {
      selectSearchFeatureState: createFeatureSelector<DaffSearchReducersState<T>>(DAFF_SEARCH_STORE_FEATURE_KEY),
    };
})();
