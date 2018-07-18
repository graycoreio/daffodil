import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromFoundationShipping from './shipping.reducer';

export interface FoundationShippingState {
  foundationShipping: fromFoundationShipping.State;
}

export interface State {
  foundationShipping: FoundationShippingState
}

export const reducers : ActionReducerMap<FoundationShippingState> = {
  foundationShipping: fromFoundationShipping.reducer
}

/**
 * Foundation Shipping State
 */
export const selectFoundationShippingState: MemoizedSelector<object, FoundationShippingState> = createFeatureSelector<FoundationShippingState>('foundationShipping');

export const foundationShippingStateSelector = createSelector(
  selectFoundationShippingState,
  (state: FoundationShippingState) => state.foundationShipping
);

export const selectShowShippingForm: MemoizedSelector<object, boolean> = createSelector(
  foundationShippingStateSelector,
  fromFoundationShipping.getShowShippingForm
);
