import { DaffCountry } from '@daffodil/geography';

import {
  DaffCountryEntitySelectors,
  getDaffCountryEntitySelectors,
} from './country-entities.selector';
import {
  DaffGeographyFeatureSelector,
  getDaffGeographyFeatureStateSelector,
} from './geography-feature.selector';
import {
  DaffGeographySelectors,
  getGeographySelectors,
} from './geography.selector';

export interface DaffGeographyAllSelectors<T extends DaffCountry = DaffCountry> extends
  DaffCountryEntitySelectors<T>,
  DaffGeographySelectors,
  DaffGeographyFeatureSelector<T> {}

export const getDaffGeographySelectors = (() => {
  let cache;
  return <T extends DaffCountry = DaffCountry>(): DaffGeographyAllSelectors<T> =>
    cache = cache || {
      ...getGeographySelectors<T>(),
      ...getDaffCountryEntitySelectors<T>(),
      ...getDaffGeographyFeatureStateSelector<T>(),
    };
})();
