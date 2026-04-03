import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffSearchDocsStateRootSlice,
  DaffSearchDocsReducersState,
  DAFF_SEARCH_DOCS_STORE_FEATURE_KEY,
} from '../reducers/public_api';

/**
 * Selector for the search docs feature state.
 */
export interface DaffSearchDocsFeatureSelector {
  selectSearchDocsFeatureState: MemoizedSelector<DaffSearchDocsStateRootSlice, DaffSearchDocsReducersState>;
}

export const getDaffSearchDocsReducersStateSelector = (() => {
  let cache: any;
  return (): DaffSearchDocsFeatureSelector =>
    cache = cache || {
      selectSearchDocsFeatureState: createFeatureSelector<DaffSearchDocsReducersState>(DAFF_SEARCH_DOCS_STORE_FEATURE_KEY),
    };
})();
