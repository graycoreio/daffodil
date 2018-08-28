import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromFoundationSidebar from './sidebar.reducer';

export interface FoundationSidebarState {
  foundationSidebar: fromFoundationSidebar.State;
}

export interface State {
  foundationSidebar: FoundationSidebarState
}

export const reducers : ActionReducerMap<FoundationSidebarState> = {
  foundationSidebar: fromFoundationSidebar.reducer
}

/**
 * Foundation Sidebar State
 */
export const selectFoundationSidebarState: MemoizedSelector<object, FoundationSidebarState> = createFeatureSelector<FoundationSidebarState>('foundationSidebar');

/**
 * Foundation Sidebar Sidebar State
 */
export const foundationSidebarStateSelector = createSelector(
  selectFoundationSidebarState,
  (state: FoundationSidebarState) => state.foundationSidebar
);

export const selectShowSidebar: MemoizedSelector<object, boolean> = createSelector(
  foundationSidebarStateSelector,
  fromFoundationSidebar.getShowSidebar
);
