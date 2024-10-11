import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { daffOperationStateSelectorFactory } from '@daffodil/core/state';

import { DAFF_CONTACT_STORE_FEATURE_KEY } from '../reducers/contact-store-feature-key';
import {
  DaffContactState,
  DaffContactStateRootSlice,
} from '../reducers/contact.reducer';

export const selectContactFeatureState:
MemoizedSelector<DaffContactStateRootSlice, DaffContactState> = createFeatureSelector<DaffContactState>(DAFF_CONTACT_STORE_FEATURE_KEY);

export const {
  selectLoading: selectDaffContactLoading,
  selectErrors: selectDaffContactError,
} = daffOperationStateSelectorFactory(selectContactFeatureState);

export const selectDaffContactSuccess = createSelector(
  selectContactFeatureState, (state: DaffContactState) => state.success,
);
