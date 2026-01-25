import {
  createSelector,
  defaultMemoize,
} from '@ngrx/store';

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

export const daffSearchGetIncrementalSelectors: <T extends DaffSearchResult = DaffSearchResult>() => DaffSearchSelectors<T> = defaultMemoize(<T extends DaffSearchResult = DaffSearchResult>() => daffSearchCreateSearchSelectors<T>(selectIncrementalState)).memoized;
