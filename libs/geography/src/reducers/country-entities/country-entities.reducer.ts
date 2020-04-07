import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import { DaffGeographyActions, DaffGeographyActionTypes } from '../../actions/public_api';
import { DaffCountry } from '../../models/country';

/**
 * Interface for country entity state.
 */
export interface DaffCountryEntityState<T extends DaffCountry> extends EntityState<T> {}

/**
 * Country Adapter for changing/overwriting entity state.
 */
export const getCountryAdapter = (() => {
  let cache;
  return <T extends DaffCountry>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>();
})();

/**
 * Initial state for country entity state.
 */
export const initialState: DaffCountryEntityState<any> = getCountryAdapter().getInitialState();

/**
 * Reducer function that catches actions and changes/overwrites country entities state.
 */
export function daffCountryEntitiesReducer<T extends DaffCountry>(
  state = initialState,
  action: DaffGeographyActions<T>
): DaffCountryEntityState<T> {
  switch (action.type) {
    case DaffGeographyActionTypes.CountryLoadSuccessAction:
      return getCountryAdapter<T>().upsertOne(action.payload, state);

    case DaffGeographyActionTypes.CountryListSuccessAction:
      return getCountryAdapter<T>().upsertMany(action.payload, state);

    default:
      return state;
  }
}
