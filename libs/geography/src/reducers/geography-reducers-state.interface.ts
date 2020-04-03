import { DaffGeographyReducerState } from './geography/geography-state.interface';
import { DaffCountryEntityState } from './country-entities/country-entities.reducer';

export interface DaffGeographyFeatureState {
  geography: DaffGeographyReducerState,
  countries: DaffCountryEntityState
}
