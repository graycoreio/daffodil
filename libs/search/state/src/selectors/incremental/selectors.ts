import { createSelector } from '@ngrx/store';

import { DaffSearchResult } from '@daffodil/search';

import { getDaffSearchReducersStateSelector } from '../search-feature.selector';
import {
  daffSearchCreateSearchSelectors,
  DaffSearchSelectors,
} from '../search.selector';

const { selectSearchFeatureState } = getDaffSearchReducersStateSelector();
const selectIncrementalState = createSelector(
  selectSearchFeatureState,
  state => state.incremental,
);

export const daffSearchGetIncrementalSelectors = (() => {
  let cache;
  return <T extends DaffSearchResult = DaffSearchResult>(): DaffSearchSelectors<T> =>
    cache = cache || daffSearchCreateSearchSelectors<T>(selectIncrementalState);
})();
