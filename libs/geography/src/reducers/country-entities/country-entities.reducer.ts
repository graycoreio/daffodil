import { DaffGeographyActions, DaffGeographyActionTypes } from '../../actions/public_api';
import { DaffCountry } from '../../models/country';
import { getCountryAdapter } from './country-entities-adapter';
import { DaffCountryEntityState } from './country-entities-state.interface';
import { daffCountryEntitiesInitialState } from './country-entities-initial-state';

/**
 * Reducer function that catches actions and changes/overwrites country entities state.
 */
export function daffCountryEntitiesReducer<T extends DaffCountry>(
  state = daffCountryEntitiesInitialState,
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
