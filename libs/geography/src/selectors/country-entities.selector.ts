import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import {
  getCountryAdapter,
  DaffCountryEntityState
} from '../reducers/public_api';
import { daffGeographyFeatureStateSelector } from './geography-feature.selector';
import { DaffCountry } from '../models/country';

export interface DaffCountryEntitySelectors<T extends DaffCountry> {
  selectCountryEntitiesState: MemoizedSelector<object, DaffCountryEntityState<T>>;
  selectCountryIds: MemoizedSelector<object, string[] | number[]>;
  selectCountryEntities: MemoizedSelector<object, Dictionary<T>>;
  selectAllCountries: MemoizedSelector<object, T[]>;
  selectCountryTotal: MemoizedSelector<object, number>;
}

const createCountryEntitySelectors = <T extends DaffCountry>() => {
  const { selectGeographyFeatureState } = daffGeographyFeatureStateSelector<T>();
  const selectCountryEntitiesState = createSelector(
    selectGeographyFeatureState,
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

