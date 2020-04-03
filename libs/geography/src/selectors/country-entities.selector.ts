import { createSelector } from '@ngrx/store';

import { countryAdapter } from '../reducers/public_api';
import { selectGeographyFeatureState } from './geography-feature.selector';

export const selectCountryEntitiesState = createSelector(
  selectGeographyFeatureState,
  state => state.countries
);

const { selectIds, selectEntities, selectAll, selectTotal } = countryAdapter.getSelectors(selectCountryEntitiesState);
/**
 * Selector for country IDs.
 */
export const selectCountryIds = selectIds;
/**
 * Selector for country entities.
 */
export const selectCountryEntities = selectEntities;
/**
 * Selector for all countries.
 */
export const selectAllCountries = selectAll;
/**
 * Selector for total number of countries.
 */
export const selectCountryTotal = selectTotal;


