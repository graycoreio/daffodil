import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import { DaffCountry } from '@daffodil/geography';

import { getDaffGeographyFeatureStateSelector } from './geography-feature.selector';
import { DaffGeographyStateRootSlice } from '../reducers/geography-reducers-state.interface';
import {
  getCountryAdapter,
  DaffCountryEntityState,
} from '../reducers/public_api';

export interface DaffCountryEntitySelectors<T extends DaffCountry = DaffCountry> {
  selectCountryEntitiesState: MemoizedSelector<DaffGeographyStateRootSlice<T>, DaffCountryEntityState<T>>;
  selectCountryIds: MemoizedSelector<DaffGeographyStateRootSlice<T>, T['id'][]>;
  selectCountryEntities: MemoizedSelector<DaffGeographyStateRootSlice<T>, Dictionary<T>>;
  selectAllCountries: MemoizedSelector<DaffGeographyStateRootSlice<T>, T[]>;
  selectCountryTotal: MemoizedSelector<DaffGeographyStateRootSlice<T>, number>;
  selectCountry: (id: T['id']) => MemoizedSelector<DaffGeographyStateRootSlice<T>, T>;
  selectCountrySubdivisions: (id: T['id']) => MemoizedSelector<DaffGeographyStateRootSlice<T>, T['subdivisions']>;
  selectIsCountryFullyLoaded: (id: T['id']) => MemoizedSelector<DaffGeographyStateRootSlice<T>, boolean>;
}

const createCountryEntitySelectors = <T extends DaffCountry = DaffCountry>() => {
  const { selectGeographyFeatureState } = getDaffGeographyFeatureStateSelector<T>();
  const selectCountryEntitiesState = createSelector(
    selectGeographyFeatureState,
    state => state.countries,
  );
  const { selectIds, selectEntities, selectAll, selectTotal } = getCountryAdapter<T>().getSelectors(selectCountryEntitiesState);

  const selectCountry = defaultMemoize((countryId: T['id']) => createSelector(
    selectEntities,
    (countries: Dictionary<T>) => countries[countryId],
  )).memoized;

  const selectCountrySubdivisions = defaultMemoize((countryId: T['id']) => createSelector(
    selectCountry(countryId),
    (country: T) => country?.subdivisions || [],
  )).memoized;

  const selectIsCountryFullyLoaded = defaultMemoize((countryId: T['id']) => createSelector(
    selectCountry(countryId),
    (country: T) => country?.loaded,
  )).memoized;

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
    selectCountryTotal: selectTotal,
    /**
     * Selector for a specific country.
     */
    selectCountry,
    /**
     * Selector for a specific country's subdivisions.
     */
    selectCountrySubdivisions,
    /**
     * Selector for checking if a country has been fully loaded.
     * If true, then a country's subdivisions will be populated if any exist.
     */
    selectIsCountryFullyLoaded,
  };
};

export const getDaffCountryEntitySelectors = (() => {
  let cache;
  return <T extends DaffCountry>(): DaffCountryEntitySelectors<T> =>
    cache = cache || createCountryEntitySelectors<T>();
})();

