import {
  createSelector,
  MemoizedSelector,
  createFeatureSelector,
} from '@ngrx/store';

import { DAFF_NEWSLETTER_STORE_FEATURE_KEY } from '../reducers/newsletter-store-feature-key';
import { DaffNewsletterState } from '../reducers/newsletter.reducer';

export interface State {
  [DAFF_NEWSLETTER_STORE_FEATURE_KEY]: DaffNewsletterState;
}

/**
 * Feature State Selector
 */
const selectNewsletterFeatureState:
  MemoizedSelector<State, DaffNewsletterState> = createFeatureSelector<DaffNewsletterState>(DAFF_NEWSLETTER_STORE_FEATURE_KEY);


/**
 * Child key of feature state
 */
export const selectDaffNewsletterLoading = createSelector(
  selectNewsletterFeatureState,
  (state: DaffNewsletterState) => state.loading,
);

export const selectDaffNewsletterError = createSelector(
  selectNewsletterFeatureState,
  (state: DaffNewsletterState) => state.error,
);

export const selectDaffNewsletterSuccess = createSelector(
  selectNewsletterFeatureState,
  (state: DaffNewsletterState) => state.success,
);
