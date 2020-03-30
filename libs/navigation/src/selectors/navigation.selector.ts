import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { NavigationReducerState } from '../reducers/navigation/navigation-reducer-state.interface';
import { NavigationReducersState } from '../reducers/navigation-reducers.interface';
import { DaffNavigationTree } from '../models/navigation-tree';

/**
 * Navigation Feature State
 */
export function selectNavigationFeatureState<T extends DaffNavigationTree<T>>():
	MemoizedSelector<object, NavigationReducersState<T>> {
	return createFeatureSelector<NavigationReducersState<T>>('navigation');
}

/**
 * Navigation State
 */
export function selectNavigationState<T extends DaffNavigationTree<T>>():
	MemoizedSelector<object, NavigationReducerState<T>> {
		return createSelector(
			selectNavigationFeatureState(), 
			(state: NavigationReducersState<T>) => state.navigation
		);
	}

export function selectNavigationTree<T extends DaffNavigationTree<T>>():
	MemoizedSelector<object, T> {
		return createSelector(
  		selectNavigationState(),
			(state: NavigationReducerState<T>) => state.navigationTree
		);
	}

export function selectNavigationLoading<T extends DaffNavigationTree<T>>():
	MemoizedSelector<object, boolean> {
		return createSelector(
  		selectNavigationState(),
			(state: NavigationReducerState<T>) => state.loading
		);
	}

export function selectNavigationErrors<T extends DaffNavigationTree<T>>():
	MemoizedSelector<object, string[]> {
		return createSelector(
  		selectNavigationState(),
			(state: NavigationReducerState<T>) => state.errors
		);
	}
