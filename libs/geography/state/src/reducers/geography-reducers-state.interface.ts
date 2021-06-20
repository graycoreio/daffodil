import { DaffCountry } from '@daffodil/geography';

import { DaffCountryEntityState } from './country-entities/country-entities-state.interface';
import { DAFF_GEOGRAPHY_STORE_FEATURE_KEY } from './geography-store-feature-key';
import { DaffGeographyReducerState } from './geography/geography-state.interface';

export interface DaffGeographyFeatureState<T extends DaffCountry = DaffCountry> {
  geography: DaffGeographyReducerState;
  countries: DaffCountryEntityState<T>;
}

export interface DaffGeographyStateRootSlice<T extends DaffCountry = DaffCountry> {
  [DAFF_GEOGRAPHY_STORE_FEATURE_KEY]: DaffGeographyFeatureState<T>;
}
