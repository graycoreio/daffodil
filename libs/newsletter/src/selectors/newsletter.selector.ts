import { createSelector, MemoizedSelector, createFeatureSelector } from '@ngrx/store';
import { DaffNewsletterState } from '../reducers/newsletter.reducer';

export interface State {
  newsletter: DaffNewsletterState
}

/**
 * Feature State Selector
 */
const selectNewsletterFeatureState: 
  MemoizedSelector<State, DaffNewsletterState> = createFeatureSelector<DaffNewsletterState>('newsletter');


/**
 * Child key of feature state
 */
export const selectDaffNewsletterLoading = createSelector(
  selectNewsletterFeatureState,
  (state: DaffNewsletterState) => state.loading
);

export const selectDaffNewsletterError = createSelector(
  selectNewsletterFeatureState,
  (state: DaffNewsletterState) => state.error
);

export const selectDaffNewsletterSuccess = createSelector(
  selectNewsletterFeatureState,
  (state: DaffNewsletterState) => state.success
);