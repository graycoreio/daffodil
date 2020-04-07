import { createSelector, MemoizedSelector } from '@ngrx/store';

import { selectGeographyFeatureState } from './geography-feature.selector';
import { DaffCountry } from '../models/country';
import {
  daffCountryEntitySelectors,
  DaffCountryEntitySelectors
} from './country-entities.selector';
import {
  DaffGeographyReducerState,
  DaffGeographyFeatureState,
  DaffCountryEntityState
} from '../reducers/public_api';

export interface DaffGeographySelectors<T extends DaffCountry> extends DaffCountryEntitySelectors<T> {
  selectGeographyState: MemoizedSelector<DaffGeographyFeatureState<T>, DaffGeographyReducerState>;
  selectGeographyLoading: MemoizedSelector<DaffCountryEntityState<T>, boolean>;
  selectGeographyErrors: MemoizedSelector<DaffCountryEntityState<T>, string[]>;
}

export const createGeographySelectors = <T extends DaffCountry>() => {
  const selectGeographyState = createSelector(
    selectGeographyFeatureState<T>(),
    state => state.geography
  );

  const selectGeographyLoading = createSelector(
    selectGeographyState,
    state => state.loading
  );

  const selectGeographyErrors = createSelector(
    selectGeographyState,
    state => state.errors
  );

  return {
    selectGeographyState,
    selectGeographyLoading,
    selectGeographyErrors
  }
}

export const daffGeographySelectors = (() => {
  let cache;
  return <T extends DaffCountry>(): DaffGeographySelectors<T> =>
    cache = cache || {
      ...createGeographySelectors<T>(),
      ...daffCountryEntitySelectors<T>(),
    }
})();
