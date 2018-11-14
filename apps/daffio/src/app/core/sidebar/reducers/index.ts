import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromDaffioSidebar from './sidebar.reducer';

export interface DaffioSidebarState {
  daffioSidebar: fromDaffioSidebar.State;
}

export interface State {
  daffioSidebar: DaffioSidebarState
}

export const reducers : ActionReducerMap<DaffioSidebarState> = {
  daffioSidebar: fromDaffioSidebar.reducer
}

/**
 * Daffio Sidebar State
 */
export const selectDaffioSidebarState: MemoizedSelector<object, DaffioSidebarState> = 
  createFeatureSelector<DaffioSidebarState>('daffioSidebar');

/**
 * Daffio Sidebar Sidebar State
 */
export const daffioSidebarStateSelector = createSelector(
  selectDaffioSidebarState,
  (state: DaffioSidebarState) => state.daffioSidebar
);

export const selectShowSidebar: MemoizedSelector<object, boolean> = createSelector(
  daffioSidebarStateSelector,
  fromDaffioSidebar.getShowSidebar
);
