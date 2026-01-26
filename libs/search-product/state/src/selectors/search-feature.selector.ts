import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import {
  DaffSearchProductStateRootSlice,
  DaffSearchProductReducersState,
  DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Selector for the search product feature state.
 */
export interface DaffSearchProductFeatureSelector {
  selectSearchProductFeatureState: MemoizedSelector<DaffSearchProductStateRootSlice, DaffSearchProductReducersState>;
}

export const getDaffSearchProductReducersStateSelector: () => DaffSearchProductFeatureSelector = defaultMemoize(() => ({
  selectSearchProductFeatureState: createFeatureSelector<DaffSearchProductReducersState>(DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY),
})).memoized;
