import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffCountry } from '@daffodil/geography';

import { DaffGeographyReducerState } from '../reducers/public_api';
import { getDaffGeographyFeatureStateSelector } from './geography-feature.selector';

export interface DaffGeographySelectors {
  selectGeographyState: MemoizedSelector<Record<string, any>, DaffGeographyReducerState>;
  selectGeographyLoading: MemoizedSelector<Record<string, any>, boolean>;
  selectGeographyErrors: MemoizedSelector<Record<string, any>, string[]>;
}

const createGeographySelectors = <T extends DaffCountry = DaffCountry>() => {
  const { selectGeographyFeatureState } = getDaffGeographyFeatureStateSelector<T>();
  const selectGeographyState = createSelector(
    selectGeographyFeatureState,
    state => state.geography,
  );

  const selectGeographyLoading = createSelector(
    selectGeographyState,
    state => state.loading,
  );

  const selectGeographyErrors = createSelector(
    selectGeographyState,
    state => state.errors,
  );

  return {
    selectGeographyState,
    selectGeographyLoading,
    selectGeographyErrors,
  };
};

export const getGeographySelectors = (() => {
  let cache;
  return <T extends DaffCountry = DaffCountry>(): DaffGeographySelectors =>
    cache = cache || createGeographySelectors<T>();
})();
