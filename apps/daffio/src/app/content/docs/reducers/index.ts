import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

export interface State {
  list: DaffDocsListState
}

export interface DaffioDocsState {
  
}


export const reducers : ActionReducerMap<DaffioDocsState> = {
  
}

/**
 * Daffio Sidebar State
 */
export const selectDaffioDocsState: MemoizedSelector<object, DaffioDocsState> = 
  createFeatureSelector<DaffioDocsState>('daffioSidebar');

/**
 * Daffio Sidebar Sidebar State
 */
export const daffioDocsStateSelector = createSelector(
  selectDaffioDocsState,
  (state: DaffioDocsState) => state.daffioDocs
);

export const selectShowSidebar: MemoizedSelector<object, boolean> = createSelector(
  daffioDocsStateSelector,
  DaffioDocsState.getShowSidebar
);
