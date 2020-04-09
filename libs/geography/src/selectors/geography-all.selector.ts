import { DaffCountry } from '../models/public_api';
import { DaffCountryEntitySelectors, getDaffCountryEntitySelectors } from './country-entities.selector';
import { DaffGeographySelectors, getDaffGeographySelectors } from './geography.selector';
import { DaffGeographyFeatureSelector, getDaffGeographyFeatureStateSelector } from './geography-feature.selector';

export interface DaffGeographyAllSelectors<T extends DaffCountry> extends
  DaffCountryEntitySelectors<T>,
  DaffGeographySelectors,
  DaffGeographyFeatureSelector<T> {}

export const getDaffGeographyAllSelectors = (() => {
  let cache;
  return <T extends DaffCountry>(): DaffGeographyAllSelectors<T> =>
    cache = cache || {
      ...getDaffGeographySelectors<T>(),
      ...getDaffCountryEntitySelectors<T>(),
      ...getDaffGeographyFeatureStateSelector<T>()
    }
})();
