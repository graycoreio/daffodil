import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffGeographyFeatureState, DAFF_GEOGRAPHY_STORE_FEATURE_KEY } from '../reducers/public_api';
import { DaffCountry } from '../models/country';

export interface DaffGeographyFeatureSelector<T extends DaffCountry> {
  selectGeographyFeatureState: MemoizedSelector<object, DaffGeographyFeatureState<T>>
}

export const getDaffGeographyFeatureStateSelector = (() => {
  let cache;
  return <T extends DaffCountry>(): DaffGeographyFeatureSelector<T> =>
    cache = cache || {
      selectGeographyFeatureState: createFeatureSelector<DaffGeographyFeatureState<T>>(DAFF_GEOGRAPHY_STORE_FEATURE_KEY)
    }
})();
