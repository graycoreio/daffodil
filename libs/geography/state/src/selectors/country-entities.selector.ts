import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  MemoizedSelectorWithProps,
} from '@ngrx/store';

import { DaffCountry } from '@daffodil/geography';

import {
  getCountryAdapter,
  DaffCountryEntityState,
} from '../reducers/public_api';
import { getDaffGeographyFeatureStateSelector } from './geography-feature.selector';

export interface DaffCountryEntitySelectors<T extends DaffCountry = DaffCountry> {
  selectCountryEntitiesState: MemoizedSelector<Record<string, any>, DaffCountryEntityState<T>>;
  selectCountryIds: MemoizedSelector<Record<string, any>, T['id'][]>;
  selectCountryEntities: MemoizedSelector<Record<string, any>, Dictionary<T>>;
  selectAllCountries: MemoizedSelector<Record<string, any>, T[]>;
  selectCountryTotal: MemoizedSelector<Record<string, any>, number>;
  selectCountry: MemoizedSelectorWithProps<Record<string, any>, {id: T['id']}, T>;
  selectCountrySubdivisions: MemoizedSelectorWithProps<Record<string, any>, {id: T['id']}, T['subdivisions']>;
  selectIsCountryFullyLoaded: MemoizedSelector<Record<string, any>, boolean>;
}

const createCountryEntitySelectors = <T extends DaffCountry = DaffCountry>() => {
  const { selectGeographyFeatureState } = getDaffGeographyFeatureStateSelector<T>();
  const selectCountryEntitiesState = createSelector(
    selectGeographyFeatureState,
    state => state.countries,
  );
  const { selectIds, selectEntities, selectAll, selectTotal } = getCountryAdapter<T>().getSelectors(selectCountryEntitiesState);

  const selectCountry = createSelector(
    selectEntities,
    (countries: Dictionary<T>, props) => countries[props.id],
  );

  const selectCountrySubdivisions = createSelector(
    selectEntities,
    (countries: Dictionary<T>, props) => {
      const country = selectCountry.projector(countries, { id: props.id });
      return country ? country.subdivisions : [];
    },
  );

  const selectIsCountryFullyLoaded = createSelector(
    selectEntities,
    (countries: Dictionary<T>, props: {id: T['id']}) => {
      const country = selectCountry.projector(countries, { id: props.id });
      return country && country.loaded;
    },
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

