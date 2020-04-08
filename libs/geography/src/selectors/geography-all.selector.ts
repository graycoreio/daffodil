import { DaffCountry } from '../models/public_api';
import { DaffCountryEntitySelectors, daffCountryEntitySelectors } from './country-entities.selector';
import { DaffGeographySelectors, daffGeographySelectors } from './geography.selector';
import { DaffGeographyFeatureSelector, daffGeographyFeatureStateSelector } from './geography-feature.selector';

export interface DaffGeographyAllSelectors<T extends DaffCountry> extends
  DaffCountryEntitySelectors<T>,
  DaffGeographySelectors,
  DaffGeographyFeatureSelector<T> {}

export const daffGeographyAllSelectors = (() => {
  let cache;
  return <T extends DaffCountry>(): DaffGeographyAllSelectors<T> =>
    cache = cache || {
      ...daffGeographySelectors<T>(),
      ...daffCountryEntitySelectors<T>(),
      ...daffGeographyFeatureStateSelector<T>()
    }
})();
