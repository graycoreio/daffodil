import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromSidebar from './sidebar.reducer';

export interface DaffioSidebarState {
  daffioSidebar: fromSidebar.State;
}

export interface State {
  daffioSidebar: DaffioSidebarState
}

export const reducers : ActionReducerMap<DaffioSidebarState> = {
  daffioSidebar: fromSidebar.reducer
}

/**
 * Daffio Sidebar State
 */
export const selectDaffioSidebarState: MemoizedSelector<object, DaffioSidebarState> = createFeatureSelector<DaffioSidebarState>('sidebar');

/**
 * Daffio Sidebar Sidebar State
 */
export const daffioSidebarStateSelector = createSelector(
  selectDaffioSidebarState,
  (state: DaffioSidebarState) => state.daffioSidebar
);

export const selectShowSidebar: MemoizedSelector<object, boolean> = createSelector(
  daffioSidebarStateSelector,
  fromSidebar.getShowSidebar
);
