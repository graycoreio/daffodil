import { createSelector } from '@ngrx/store';

import { selectGeographyFeatureState } from './geography-feature.selector';

export const selectGeographyState = createSelector(
  selectGeographyFeatureState,
  state => state.geography
);

export const selectGeographyLoading = createSelector(
  selectGeographyState,
  state => state.loading
);

export const selectGeographyErrors = createSelector(
  selectGeographyState,
  state => state.errors
);
