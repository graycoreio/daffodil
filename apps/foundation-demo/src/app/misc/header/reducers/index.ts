import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromFoundationHeader from './header.reducer';

export interface FoundationHeaderState {
  foundationHeader: fromFoundationHeader.State;
}

export interface State {
  foundationHeader: FoundationHeaderState
}

export const reducers : ActionReducerMap<FoundationHeaderState> = {
  foundationHeader: fromFoundationHeader.reducer
}

/**
 * Foundation Header State
 */
export const selectFoundationHeaderState: MemoizedSelector<object, FoundationHeaderState> = createFeatureSelector<FoundationHeaderState>('foundationHeader');

/**
 * Foundation Header Header State
 */
export const foundationHeaderStateSelector = createSelector(
  selectFoundationHeaderState,
  (state: FoundationHeaderState) => state.foundationHeader
);

export const selectShowSidebar: MemoizedSelector<object, boolean> = createSelector(
  foundationHeaderStateSelector,
  fromFoundationHeader.getShowSidebar
);
