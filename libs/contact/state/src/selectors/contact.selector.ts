import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector,
  DefaultProjectorFn,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';

import { DAFF_CONTACT_STORE_FEATURE_KEY } from '../reducers/contact-store-feature-key';
import {
  DaffContactState,
  DaffContactStateRootSlice,
} from '../reducers/contact.reducer';

export const selectContactFeatureState:
  MemoizedSelector<DaffContactStateRootSlice, DaffContactState> = createFeatureSelector<DaffContactState>(DAFF_CONTACT_STORE_FEATURE_KEY);

export const selectDaffContactLoading = createSelector(
  selectContactFeatureState, (state: DaffContactState) => state.loading,
);

export const selectDaffContactSuccess = createSelector(
  selectContactFeatureState, (state: DaffContactState) => state.success,
);

export const selectDaffContactError: MemoizedSelector<DaffContactStateRootSlice, DaffStateError[], DefaultProjectorFn<DaffStateError[]>>
= createSelector(
  selectContactFeatureState, (state: DaffContactState) => state.errors,
);
