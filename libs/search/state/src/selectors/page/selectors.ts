import { createSelector } from '@ngrx/store';

import { DaffSearchResult } from '@daffodil/search';

import { getDaffSearchReducersStateSelector } from '../search-feature.selector';
import {
  daffSearchCreateSearchSelectors,
  DaffSearchSelectors,
} from '../search.selector';

const { selectSearchFeatureState } = getDaffSearchReducersStateSelector();
const selectSearchState = createSelector(
  selectSearchFeatureState,
  state => state.search,
);

export const daffSearchGetPageSelectors = (() => {
  let cache;
  return <T extends DaffSearchResult = DaffSearchResult>(): DaffSearchSelectors<T> =>
    cache = cache || daffSearchCreateSearchSelectors<T>(selectSearchState);
})();
