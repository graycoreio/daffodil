import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import {
  getCountryAdapter,
  DaffGeographyFeatureState,
  DaffCountryEntityState
} from '../reducers/public_api';
import { selectGeographyFeatureState } from './geography-feature.selector';
import { DaffCountry } from '../models/country';

export interface DaffCountryEntitySelectors<T extends DaffCountry> {
  selectCountryEntitiesState: MemoizedSelector<DaffGeographyFeatureState<T>, DaffCountryEntityState<T>>;
  selectCountryIds: MemoizedSelector<DaffCountryEntityState<T>, string[] | number[]>;
  selectCountryEntities: MemoizedSelector<DaffCountryEntityState<T>, Dictionary<T>>;
  selectAllCountries: MemoizedSelector<DaffCountryEntityState<T>, T[]>;
  selectCountryTotal: MemoizedSelector<DaffCountryEntityState<T>, number>;
}

const createCountryEntitySelectors = <T extends DaffCountry>() => {
  const selectCountryEntitiesState = createSelector(
    selectGeographyFeatureState<T>(),
    state => state.countries
  )
  const { selectIds, selectEntities, selectAll, selectTotal } = getCountryAdapter<T>().getSelectors(selectCountryEntitiesState);

  return {
    selectCountryEntitiesState,
    /**
     * Selector for country IDs.
     */
    selectCountryIds: selectIds,
    /**
     * Selector for country entities.
     */
    selectCountryEntities: selectEntities,
    /**
     * Selector for all countries.
     */
    selectAllCountries: selectAll,
    /**
     * Selector for total number of countries.
     */
    selectCountryTotal: selectTotal
  }
}

export const daffCountryEntitySelectors = (() => {
  let cache;
  return <T extends DaffCountry>(): DaffCountryEntitySelectors<T> =>
    cache = cache || createCountryEntitySelectors<T>()
})();

