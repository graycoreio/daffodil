import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { DaffNavigationReducerState } from '../reducers/navigation/navigation-reducer-state.interface';
import { DaffNavigationReducersState } from '../reducers/navigation-reducers.interface';
import { DaffGenericNavigationTree } from '../models/generic-navigation-tree';

/**
 * Navigation Feature State
 */
export function selectNavigationFeatureState<T extends DaffGenericNavigationTree<T>>():
	MemoizedSelector<object, DaffNavigationReducersState<T>> {
	return createFeatureSelector<DaffNavigationReducersState<T>>('navigation');
}

/**
 * Navigation State
 */
export function selectNavigationState<T extends DaffGenericNavigationTree<T>>():
	MemoizedSelector<object, DaffNavigationReducerState<T>> {
		return createSelector(
			selectNavigationFeatureState(), 
			(state: DaffNavigationReducersState<T>) => state.navigation
		);
	}

export function selectNavigationTree<T extends DaffGenericNavigationTree<T>>():
	MemoizedSelector<object, T> {
		return createSelector(
  		selectNavigationState(),
			(state: DaffNavigationReducerState<T>) => state.navigationTree
		);
	}

export function selectNavigationLoading<T extends DaffGenericNavigationTree<T>>():
	MemoizedSelector<object, boolean> {
		return createSelector(
  		selectNavigationState(),
			(state: DaffNavigationReducerState<T>) => state.loading
		);
	}

export function selectNavigationErrors<T extends DaffGenericNavigationTree<T>>():
	MemoizedSelector<object, string[]> {
		return createSelector(
  		selectNavigationState(),
			(state: DaffNavigationReducerState<T>) => state.errors
		);
	}
