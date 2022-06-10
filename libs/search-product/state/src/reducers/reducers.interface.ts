import {
  DaffProductStateRootSlice,
  DaffProductCollectionReducerState,
} from '@daffodil/product/state';
import { DaffSearchStateRootSlice } from '@daffodil/search/state';

import { DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * The feature state for search.
 */
export interface DaffSearchProductReducersState {
  productCollection: DaffProductCollectionReducerState;
}

/**
 * The footprint of search feature state in the root application state.
 */
export interface DaffSearchProductStateRootSlice extends DaffSearchStateRootSlice, DaffProductStateRootSlice {
  [DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY]: DaffSearchProductReducersState;
}
