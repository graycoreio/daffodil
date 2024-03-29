import { DaffSearchResult } from '@daffodil/search';

import { DaffSearchReducerState } from './search/public_api';
import { DAFF_SEARCH_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * The feature state for search.
 */
export interface DaffSearchReducersState<T extends DaffSearchResult = DaffSearchResult> {
  search: DaffSearchReducerState<T>;
  incremental: DaffSearchReducerState;
}

/**
 * The footprint of search feature state in the root application state.
 */
export interface DaffSearchStateRootSlice<T extends DaffSearchResult = DaffSearchResult> {
  [DAFF_SEARCH_STORE_FEATURE_KEY]: DaffSearchReducersState<T>;
}
