import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromFoundationSidebar from './sidebar.reducer';

export interface FoundationHeaderState {
  foundationSidebar: fromFoundationSidebar.State;
}

export interface State {
  foundationHeader: FoundationHeaderState
}

export const reducers : ActionReducerMap<FoundationHeaderState> = {
  foundationSidebar: fromFoundationSidebar.reducer
}

/**
 * Foundation Header State
 */
export const selectFoundationHeaderState: MemoizedSelector<object, FoundationHeaderState> = createFeatureSelector<FoundationHeaderState>('foundationHeader');

/**
 * Foundation Header Sidebar State
 */
export const foundationSidebarStateSelector = createSelector(
  selectFoundationHeaderState,
  (state: FoundationHeaderState) => state.foundationSidebar
);

export const selectShowSidebar: MemoizedSelector<object, boolean> = createSelector(
  foundationSidebarStateSelector,
  fromFoundationSidebar.getShowSidebar
);
