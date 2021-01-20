import { DaffCountry } from '@daffodil/geography';
import { DaffCountryEntitySelectors } from './country-entities.selector';
import { DaffGeographySelectors } from './geography.selector';
import { DaffGeographyFeatureSelector } from './geography-feature.selector';
export interface DaffGeographyAllSelectors<T extends DaffCountry = DaffCountry> extends DaffCountryEntitySelectors<T>, DaffGeographySelectors, DaffGeographyFeatureSelector<T> {
}
export declare const getDaffGeographySelectors: <T extends DaffCountry = DaffCountry>() => DaffGeographyAllSelectors<T>;
