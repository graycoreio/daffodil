import { DaffGeographyActions, DaffGeographyActionTypes } from '../../actions/public_api';
import { DaffCountry } from '../../models/country';
import { getCountryAdapter } from './country-entities-adapter';
import { DaffCountryEntityState } from './country-entities-state.interface';
import { daffCountryEntitiesInitialState } from './country-entities-initial-state';

/**
 * Reducer function that catches actions and changes/overwrites country entities state.
 */
export function daffCountryEntitiesReducer<T extends DaffCountry = DaffCountry>(
  state = daffCountryEntitiesInitialState,
  action: DaffGeographyActions<T>
): DaffCountryEntityState<T> {
  const adapter = getCountryAdapter<T>();

  switch (action.type) {
    case DaffGeographyActionTypes.CountryLoadSuccessAction:
      return adapter.upsertOne({
        ...action.payload,
        loaded: true
      }, state);

    case DaffGeographyActionTypes.CountryListSuccessAction:
      return adapter.upsertMany(
        action.payload.map(country => ({
          ...country,
          // defer to the loaded state of the country already in state (if it exists) but init field to false if it does not
          loaded: (state.entities[country.id] && state.entities[country.id].loaded) || false,
          // if the country coming in has no subdivisions and the same country in state does, use the subdivisions in state
          subdivisions: country.subdivisions.length === 0 && state.entities[country.id] && state.entities[country.id].subdivisions.length > 0
            ? state.entities[country.id].subdivisions
            : country.subdivisions
        })),
        state
      );

    default:
      return state;
  }
}
