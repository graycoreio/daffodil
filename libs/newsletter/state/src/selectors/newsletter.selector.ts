import {
  createSelector,
  MemoizedSelector,
  createFeatureSelector,
} from '@ngrx/store';

import { daffOperationStateSelectorFactory } from '@daffodil/core/state';

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

export const {
  selectErrors: selectDaffNewsletterError,
  selectLoading: selectDaffNewsletterLoading,
} = daffOperationStateSelectorFactory(selectNewsletterFeatureState);

export const selectDaffNewsletterSuccess = createSelector(
  selectNewsletterFeatureState,
  (state: DaffNewsletterState) => state.success,
);
