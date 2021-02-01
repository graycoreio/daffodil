import { DaffCountry } from '@daffodil/geography';

import { DaffCountryEntityState } from './country-entities/country-entities-state.interface';
import { DaffGeographyReducerState } from './geography/geography-state.interface';

export interface DaffGeographyFeatureState<T extends DaffCountry = DaffCountry> {
  geography: DaffGeographyReducerState;
  countries: DaffCountryEntityState<T>;
}
