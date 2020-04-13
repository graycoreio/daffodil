import { DaffCountry } from '../models/public_api';
import { DaffCountryEntitySelectors, getDaffCountryEntitySelectors } from './country-entities.selector';
import { DaffGeographySelectors, getGeographySelectors } from './geography.selector';
import { DaffGeographyFeatureSelector, getDaffGeographyFeatureStateSelector } from './geography-feature.selector';

export interface DaffGeographyAllSelectors<T extends DaffCountry> extends
  DaffCountryEntitySelectors<T>,
  DaffGeographySelectors,
  DaffGeographyFeatureSelector<T> {}

export const getDaffGeographySelectors = (() => {
  let cache;
  return <T extends DaffCountry>(): DaffGeographyAllSelectors<T> =>
    cache = cache || {
      ...getGeographySelectors<T>(),
      ...getDaffCountryEntitySelectors<T>(),
      ...getDaffGeographyFeatureStateSelector<T>()
    }
})();
