import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { DaffContactState } from '../reducers/contact.reducer';

export interface DaffContactFeatureState {
  contact: DaffContactState
}

export const selectContactFeatureState:
  MemoizedSelector<DaffContactFeatureState, DaffContactState> = createFeatureSelector<DaffContactState>('contact');

export const selectDaffContactLoading = createSelector(
  selectContactFeatureState, (state: DaffContactState) => state.loading
);

export const selectDaffContactSuccess = createSelector(
  selectContactFeatureState, (state: DaffContactState) => state.success
);

export const selectDaffContactError = createSelector(
  selectContactFeatureState, (state: DaffContactState) => state.errors
);