import { createSelector, createFeatureSelector } from '@ngrx/store';

import { NavigationReducerState } from '../reducers/navigation/navigation-reducer-state.interface';
import { NavigationReducersState } from '../reducers/navigation-reducers.interface';

/**
 * Navigation Feature State
 */
const selectNavigationFeatureState = createFeatureSelector<NavigationReducersState>('navigation');

/**
 * Navigation State
 */
const selectNavigationState = createSelector(
  selectNavigationFeatureState,
  (state: NavigationReducersState) => state.navigation
);

export const DaffNavigationSelectors = {
  selectNavigation: createSelector(
    selectNavigationState,
    (state: NavigationReducerState) => state.navigation
  ),
  selectNavigationLoading: createSelector(
    selectNavigationState,
    (state: NavigationReducerState) => state.loading
  ),
  selectNavigationErrors: createSelector(
    selectNavigationState,
    (state: NavigationReducerState) => state.errors
  )
}
