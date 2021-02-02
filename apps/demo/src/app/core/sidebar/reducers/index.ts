import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import * as fromDemoSidebar from './sidebar.reducer';

export interface DemoSidebarState {
  demoSidebar: fromDemoSidebar.State;
}

export interface State {
  demoSidebar: DemoSidebarState;
}

export const reducers: ActionReducerMap<DemoSidebarState> = {
  demoSidebar: fromDemoSidebar.reducer,
};

/**
 * Demo Sidebar State
 */
export const selectDemoSidebarState: MemoizedSelector<Record<string, any>, DemoSidebarState> = createFeatureSelector<DemoSidebarState>('demoSidebar');

/**
 * Demo Sidebar Sidebar State
 */
export const demoSidebarStateSelector = createSelector(
  selectDemoSidebarState,
  (state: DemoSidebarState) => state.demoSidebar,
);

export const selectShowSidebar: MemoizedSelector<Record<string, any>, boolean> = createSelector(
  demoSidebarStateSelector,
  fromDemoSidebar.getShowSidebar,
);
