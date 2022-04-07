import {
  createSelector,
  MemoizedSelector,
  createFeatureSelector,
  DefaultProjectorFn,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

import { DAFF_NEWSLETTER_STORE_FEATURE_KEY } from '../reducers/newsletter-store-feature-key';
import {
  DaffNewsletterStateRootSlice,
  DaffNewsletterState,
} from '../reducers/newsletter.reducer';

/**
 * Feature State Selector
 */
const selectNewsletterFeatureState:
MemoizedSelector<DaffNewsletterStateRootSlice, DaffNewsletterState> = createFeatureSelector<DaffNewsletterState>(DAFF_NEWSLETTER_STORE_FEATURE_KEY);


/**
 * Child key of feature state
 */
export const selectDaffNewsletterLoading = createSelector(
  selectNewsletterFeatureState,
  (state: DaffNewsletterState) => state.loading,
);

export const selectDaffNewsletterError: MemoizedSelector<DaffNewsletterStateRootSlice, DaffStateError, DefaultProjectorFn<DaffStateError>> = createSelector(
  selectNewsletterFeatureState,
  (state: DaffNewsletterState) => state.error,
);

export const selectDaffNewsletterSuccess = createSelector(
  selectNewsletterFeatureState,
  (state: DaffNewsletterState) => state.success,
);
