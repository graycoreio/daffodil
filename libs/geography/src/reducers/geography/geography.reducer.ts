import { daffGeographyInitialState } from './geography-initial-state';
import { DaffGeographyReducerState } from './geography-state.interface';
import { DaffGeographyActions, DaffGeographyActionTypes } from '../../actions/public_api';
import { DaffCountry } from '../../models/country';

export function daffGeographyReducer<T extends DaffCountry>(
  state = daffGeographyInitialState,
  action: DaffGeographyActions<T>
): DaffGeographyReducerState {
  switch (action.type) {
    case DaffGeographyActionTypes.CountryLoadAction:
    case DaffGeographyActionTypes.CountryListAction:
      return { ...state, loading: true };

    case DaffGeographyActionTypes.CountryLoadSuccessAction:
    case DaffGeographyActionTypes.CountryListSuccessAction:
      return {
        ...state,
        errors: [],
        loading: false,
      };

    case DaffGeographyActionTypes.CountryLoadFailureAction:
    case DaffGeographyActionTypes.CountryListFailureAction:
      return {
        ...state,
        errors: [
          ...state.errors,
          action.payload
        ],
        loading: false,
      };

    default:
      return state;
  }
}
