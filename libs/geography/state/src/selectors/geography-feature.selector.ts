import {
  createFeatureSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import { DaffCountry } from '@daffodil/geography';

import { DaffGeographyStateRootSlice } from '../reducers/geography-reducers-state.interface';
import {
  DaffGeographyFeatureState,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY,
} from '../reducers/public_api';

export interface DaffGeographyFeatureSelector<T extends DaffCountry = DaffCountry> {
  selectGeographyFeatureState: MemoizedSelector<DaffGeographyStateRootSlice<T>, DaffGeographyFeatureState<T>>;
}

export const getDaffGeographyFeatureStateSelector: <T extends DaffCountry = DaffCountry>() => DaffGeographyFeatureSelector<T> = defaultMemoize(<T extends DaffCountry = DaffCountry>() => ({
  selectGeographyFeatureState: createFeatureSelector<DaffGeographyFeatureState<T>>(DAFF_GEOGRAPHY_STORE_FEATURE_KEY),
})).memoized;
