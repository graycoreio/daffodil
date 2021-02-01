import {
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffCountry } from '@daffodil/geography';

import {
  DaffGeographyFeatureState,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY,
} from '../reducers/public_api';

export interface DaffGeographyFeatureSelector<T extends DaffCountry = DaffCountry> {
  selectGeographyFeatureState: MemoizedSelector<Record<string, any>, DaffGeographyFeatureState<T>>;
}

export const getDaffGeographyFeatureStateSelector = (() => {
  let cache;
  return <T extends DaffCountry = DaffCountry>(): DaffGeographyFeatureSelector<T> =>
    cache = cache || {
      selectGeographyFeatureState: createFeatureSelector<DaffGeographyFeatureState<T>>(DAFF_GEOGRAPHY_STORE_FEATURE_KEY),
    };
})();
