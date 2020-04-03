import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import { DaffGeographyActions, DaffGeographyActionTypes } from '../../actions/public_api';
import { DaffCountry } from '../../models/country';

/**
 * Interface for country entity state.
 */
export interface DaffCountryEntityState extends EntityState<DaffCountry> {}

/**
 * Country Adapter for changing/overwriting entity state.
 */
export const countryAdapter: EntityAdapter<DaffCountry> = createEntityAdapter<DaffCountry>();

/**
 * Initial state for country entity state.
 */
export const initialState: DaffCountryEntityState = countryAdapter.getInitialState();

/**
 * Reducer function that catches actions and changes/overwrites country entities state.
 */
export function daffCountryEntitiesReducer(
  state = initialState,
  action: DaffGeographyActions<DaffCountry>
): DaffCountryEntityState {
  switch (action.type) {
    case DaffGeographyActionTypes.CountryLoadSuccessAction:
      return countryAdapter.upsertOne(action.payload, state);

    case DaffGeographyActionTypes.CountryListSuccessAction:
      return countryAdapter.upsertMany(action.payload, state);

    default:
      return state;
  }
}
