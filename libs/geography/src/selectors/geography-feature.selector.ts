import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffGeographyFeatureState, DAFF_GEOGRAPHY_STORE_FEATURE_KEY } from '../reducers/public_api';
import { DaffCountry } from '../models/country';

export const selectGeographyFeatureState = (() => {
  let cache;
  return <T extends DaffCountry>(): MemoizedSelector<object, DaffGeographyFeatureState<T>> =>
    cache = cache || createFeatureSelector<DaffGeographyFeatureState<T>>(DAFF_GEOGRAPHY_STORE_FEATURE_KEY)
})();
