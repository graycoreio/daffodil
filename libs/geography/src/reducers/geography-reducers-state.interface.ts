import { DaffGeographyReducerState } from './geography/geography-state.interface';
import { DaffCountryEntityState } from './country-entities/country-entities-state.interface';
import { DaffCountry } from '../models/country';

export interface DaffGeographyFeatureState<T extends DaffCountry = DaffCountry> {
  geography: DaffGeographyReducerState,
  countries: DaffCountryEntityState<T>
}
