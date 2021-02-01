import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffGenericNavigationTree } from '@daffodil/navigation';

import {
  DaffNavigationReducersState,
  DaffNavigationReducerState,
  DAFF_NAVIGATION_STORE_FEATURE_KEY,
} from '../reducers/public_api';

export interface DaffNavigationMemoizedSelectors<T extends DaffGenericNavigationTree<T>> {
	selectNavigationFeatureState: MemoizedSelector<Record<string, any>, DaffNavigationReducersState<T>>;
	selectNavigationState: MemoizedSelector<Record<string, any>, DaffNavigationReducerState<T>>;
	selectNavigationTree: MemoizedSelector<Record<string, any>, T>;
	selectNavigationLoading: MemoizedSelector<Record<string, any>, boolean>;
	selectNavigationErrors: MemoizedSelector<Record<string, any>, string[]>;
}

const createNavigationFeatureSelectors = <T extends DaffGenericNavigationTree<T>>(): DaffNavigationMemoizedSelectors<T> => {

  const selectNavigationFeatureState = createFeatureSelector<DaffNavigationReducersState<T>>(DAFF_NAVIGATION_STORE_FEATURE_KEY);

  const selectNavigationState = createSelector(
    selectNavigationFeatureState,
    (state: DaffNavigationReducersState<T>) => state.navigation,
  );

  const selectNavigationTree = createSelector(
    selectNavigationState,
    (state: DaffNavigationReducerState<T>) => state.navigationTree,
  );

  const selectNavigationLoading = createSelector(
    selectNavigationState,
    (state: DaffNavigationReducerState<T>) => state.loading,
  );

  const selectNavigationErrors = createSelector(
    selectNavigationState,
    (state: DaffNavigationReducerState<T>) => state.errors,
  );

  return {
    selectNavigationFeatureState,
    selectNavigationState,
    selectNavigationTree,
    selectNavigationLoading,
    selectNavigationErrors,
  };
};

export const getDaffNavigationSelectors = (() => {
  let cache;
  return <T extends DaffGenericNavigationTree<T>>(): DaffNavigationMemoizedSelectors<T> => cache = cache
    ? cache
    : createNavigationFeatureSelectors<T>();
})();
