import { createSelector, MemoizedSelector, createFeatureSelector } from '@ngrx/store';
import { DaffioHeaderState } from '../reducers/header.reducer';

export interface State {
  daffioHeader: DaffioHeaderState
}

/**
 * Feature State Selector
 */
const selectDaffioHeaderFeatureState: 
  MemoizedSelector<State, DaffioHeaderState> = createFeatureSelector<DaffioHeaderState>('daffioHeader');


/**
 * Child key of feature state
 */
export const selectDaffioHeaderColor = createSelector(
  selectDaffioHeaderFeatureState,
  (state: DaffioHeaderState) => state.color
);

/**
 * 
 */
export const selectDaffioHeaderStuck = createSelector(
  selectDaffioHeaderFeatureState,
  (state: DaffioHeaderState) => state.stuck
);