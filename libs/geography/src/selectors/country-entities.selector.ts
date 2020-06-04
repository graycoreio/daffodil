import { createSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import {
  getCountryAdapter,
  DaffCountryEntityState
} from '../reducers/public_api';
import { getDaffGeographyFeatureStateSelector } from './geography-feature.selector';
import {
  DaffCountry,
  DaffSubdivision
} from '../models/public_api';

export interface DaffCountryEntitySelectors<T extends DaffCountry> {
  selectCountryEntitiesState: MemoizedSelector<object, DaffCountryEntityState<T>>;
  selectCountryIds: MemoizedSelector<object, string[] | number[]>;
  selectCountryEntities: MemoizedSelector<object, Dictionary<T>>;
  selectAllCountries: MemoizedSelector<object, T[]>;
  selectCountryTotal: MemoizedSelector<object, number>;
  selectCountry: MemoizedSelectorWithProps<object, {id: string | number}, T>;
  selectCountrySubdivisions: MemoizedSelectorWithProps<object, {id: string | number}, T['subdivisions']>;
  selectIsCountryFullyLoaded: MemoizedSelector<object, boolean>;
}

const createCountryEntitySelectors = <T extends DaffCountry = DaffCountry>() => {
  const { selectGeographyFeatureState } = getDaffGeographyFeatureStateSelector<T>();
  const selectCountryEntitiesState = createSelector(
    selectGeographyFeatureState,
    state => state.countries
  )
  const { selectIds, selectEntities, selectAll, selectTotal } = getCountryAdapter<T>().getSelectors(selectCountryEntitiesState);

  const selectCountry = createSelector(
    selectEntities,
    (countries: Dictionary<T>, props) => countries[props.id]
  )

  const selectCountrySubdivisions = createSelector(
    selectEntities,
    (countries: Dictionary<T>, props) => {
      const country = selectCountry.projector(countries, { id: props.id });
      return country ? country.subdivisions : []
    }
  )

  const selectIsCountryFullyLoaded = createSelector(
    selectEntities,
    (countries: Dictionary<T>, props: {id: T['id']}) => {
      const country = selectCountry.projector(countries, { id: props.id });
      return country && country.loaded
    }
  );

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
     */
    selectIsCountryFullyLoaded
  }
}

export const getDaffCountryEntitySelectors = (() => {
  let cache;
  return <T extends DaffCountry>(): DaffCountryEntitySelectors<T> =>
    cache = cache || createCountryEntitySelectors<T>()
})();

