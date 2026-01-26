import { defaultMemoize } from '@ngrx/store';

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

export const getDaffGeographySelectors: <T extends DaffCountry = DaffCountry>() => DaffGeographyAllSelectors<T> = defaultMemoize(<T extends DaffCountry = DaffCountry>() => ({
  ...getGeographySelectors<T>(),
  ...getDaffCountryEntitySelectors<T>(),
  ...getDaffGeographyFeatureStateSelector<T>(),
})).memoized;
