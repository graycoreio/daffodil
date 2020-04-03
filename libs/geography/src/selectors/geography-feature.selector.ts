import { createFeatureSelector } from '@ngrx/store';

import { DaffGeographyFeatureState, DAFF_GEOGRAPHY_STORE_FEATURE_KEY } from '../reducers/public_api';

export const selectGeographyFeatureState = createFeatureSelector<DaffGeographyFeatureState>(DAFF_GEOGRAPHY_STORE_FEATURE_KEY);
