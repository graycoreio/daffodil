import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyReducerState } from './geography/geography-state.interface';
import { DaffCountryEntityState } from './country-entities/country-entities-state.interface';
export interface DaffGeographyFeatureState<T extends DaffCountry = DaffCountry> {
    geography: DaffGeographyReducerState;
    countries: DaffCountryEntityState<T>;
}
