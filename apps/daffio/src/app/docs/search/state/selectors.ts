import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { DAFFIO_DOCS_SEARCH_STATE_FEATURE_KEY } from './feature-key.const';
import { DaffioDocsSearchReducersState } from './reducers';

export const selectDaffioDocsSearchFeatureSelector = createFeatureSelector<DaffioDocsSearchReducersState>(DAFFIO_DOCS_SEARCH_STATE_FEATURE_KEY);
export const selectDaffioDocsSearchResultsFeatureSelector = createSelector(selectDaffioDocsSearchFeatureSelector, (state) => state.results);
export const selectDaffioDocsSearchRecentResultsSelector = createSelector(selectDaffioDocsSearchResultsFeatureSelector, (state) => state.recent);
