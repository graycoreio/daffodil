import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { DAFF_CONTACT_STORE_FEATURE_KEY } from '../reducers/contact-store-feature-key';
import { DaffContactState } from '../reducers/contact.reducer';

export interface DaffContactFeatureState {
  [DAFF_CONTACT_STORE_FEATURE_KEY]: DaffContactState;
}

export const selectContactFeatureState:
  MemoizedSelector<DaffContactFeatureState, DaffContactState> = createFeatureSelector<DaffContactState>(DAFF_CONTACT_STORE_FEATURE_KEY);

export const selectDaffContactLoading = createSelector(
  selectContactFeatureState, (state: DaffContactState) => state.loading,
);

export const selectDaffContactSuccess = createSelector(
  selectContactFeatureState, (state: DaffContactState) => state.success,
);

export const selectDaffContactError = createSelector(
  selectContactFeatureState, (state: DaffContactState) => state.errors,
);
