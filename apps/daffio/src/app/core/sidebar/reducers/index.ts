import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffSidebarMode } from '@daffodil/design/sidebar';

import * as fromDaffioSidebar from './sidebar.reducer';

export interface DaffioSidebarState {
  daffioSidebar: fromDaffioSidebar.State;
}

export interface State {
  daffioSidebar: DaffioSidebarState;
}

export const reducers: ActionReducerMap<DaffioSidebarState> = {
  daffioSidebar: fromDaffioSidebar.reducer,
};

/**
 * Daffio Sidebar State
 */
export const selectDaffioSidebarState: MemoizedSelector<Record<string, any>, DaffioSidebarState> =
  createFeatureSelector<DaffioSidebarState>('daffioSidebar');

/**
 * Daffio Sidebar Sidebar State
 */
export const daffioSidebarStateSelector = createSelector(
  selectDaffioSidebarState,
  (state: DaffioSidebarState) => state.daffioSidebar,
);

export const selectShowSidebar: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  daffioSidebarStateSelector,
  fromDaffioSidebar.getShowSidebar,
);

export const selectSidebarKind: MemoizedSelector<Record<string, any>, string> = createSelector(
  daffioSidebarStateSelector,
  fromDaffioSidebar.getKind,
);

export const selectSidebarMode: MemoizedSelector<Record<string, any>, DaffSidebarMode> = createSelector(
  daffioSidebarStateSelector,
  fromDaffioSidebar.getMode,
);
