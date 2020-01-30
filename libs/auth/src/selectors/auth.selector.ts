import { createSelector, MemoizedSelector, createFeatureSelector } from '@ngrx/store';
import { AuthReducerState } from '../reducers/auth/auth-reducer-state.interface';
import { AuthReducersState } from '../reducers/auth-reducers.interface';

/**
 * Feature State Selector
 */
export const selectAuthFeatureState = createFeatureSelector<AuthReducersState>('auth');

export const selectAuthState = createSelector(
  selectAuthFeatureState,
  (state: AuthReducersState) => state.auth
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: AuthReducerState) => state.loading
);

export const selectAuthErrors = createSelector(
  selectAuthState,
  (state: AuthReducerState) => state.errors
);

export const selectAuthToken = createSelector(
  selectAuthState,
  (state: AuthReducerState) => state.token
)
