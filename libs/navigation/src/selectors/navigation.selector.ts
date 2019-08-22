import { createSelector, createFeatureSelector } from '@ngrx/store';

import { NavigationReducerState } from '../reducers/navigation/navigation-reducer-state.interface';
import { NavigationReducersState } from '../reducers/navigation-reducers.interface';

/**
 * Navigation Feature State
 */
export const selectNavigationFeatureState = createFeatureSelector<NavigationReducersState>('navigation');

/**
 * Navigation State
 */
export const selectNavigationState = createSelector(
  selectNavigationFeatureState,
  (state: NavigationReducersState) => state.navigation
);

export const selectNavigation = createSelector(
  selectNavigationState,
  (state: NavigationReducerState) => state.navigation
);

export const selectNavigationLoading = createSelector(
  selectNavigationState,
  (state: NavigationReducerState) => state.loading
);

export const selectNavigationErrors = createSelector(
  selectNavigationState,
  (state: NavigationReducerState) => state.errors
);
