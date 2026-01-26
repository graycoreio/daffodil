import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
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

export const getDaffSearchReducersStateSelector: <T extends DaffSearchResult = DaffSearchResult>() => DaffSearchFeatureSelector<T> = defaultMemoize(<T extends DaffSearchResult = DaffSearchResult>() => ({
  selectSearchFeatureState: createFeatureSelector<DaffSearchReducersState<T>>(DAFF_SEARCH_STORE_FEATURE_KEY),
})).memoized;
