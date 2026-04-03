import { DaffCollectionMetadata } from '@daffodil/core';
import { DaffDocsStateRootSlice } from '@daffodil/docs/state';
import { DaffSearchStateRootSlice } from '@daffodil/search/state';

import { DAFF_SEARCH_DOCS_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * The feature state for search.
 */
export interface DaffSearchDocsReducersState {
  docsCollection: DaffCollectionMetadata;
}

/**
 * The footprint of search feature state in the root application state.
 */
export interface DaffSearchDocsStateRootSlice extends DaffSearchStateRootSlice, DaffDocsStateRootSlice {
  [DAFF_SEARCH_DOCS_STORE_FEATURE_KEY]: DaffSearchDocsReducersState;
}
