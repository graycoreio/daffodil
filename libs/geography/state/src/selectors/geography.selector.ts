import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCountry } from '@daffodil/geography';

import { DaffGeographyStateRootSlice } from '../reducers/geography-reducers-state.interface';
import { DaffGeographyReducerState } from '../reducers/public_api';
import { getDaffGeographyFeatureStateSelector } from './geography-feature.selector';

export interface DaffGeographySelectors {
  selectGeographyState: MemoizedSelector<DaffGeographyStateRootSlice, DaffGeographyReducerState>;
  selectGeographyLoading: MemoizedSelector<DaffGeographyStateRootSlice, boolean>;
  selectGeographyErrors: MemoizedSelector<DaffGeographyStateRootSlice, DaffStateError[]>;
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
