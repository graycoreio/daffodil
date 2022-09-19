import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffGenericCategory,
  DaffCategory,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import {
  DaffCategoryReducerState,
  DaffCategoryReducersState,
  DaffCategoryStateRootSlice,
} from '../../reducers/public_api';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

/**
 * An interface to describe all selectors related to the category page metadata, category loading, and errors.
 */
export interface DaffCategoryPageMemoizedSelectors<
  V extends DaffGenericCategory<V> = DaffCategory
> {
  /**
   * Selects all state related to the category page metadata, category loading, and errors.
   */
  selectCategoryState: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryReducerState>;
  /**
   * Selects the ids of all products in the current category page.
   */
  selectCategoryPageProductIds: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['ids']>;
  /**
   * Selects whether the category page has no products.
   */
  selectIsCategoryPageEmpty: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
  /**
   * Selects the loading state of the current category; e.g. mutating, resolving, stable.
   */
  selectCategoryPageState: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryReducerState['daffState']>;
  /**
   * Selects the id of the current category.
   */
  selectCurrentCategoryId: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['id']>;
  /**
   * @deprecated Use selectIsCategoryPageResolving instead
   */
  selectCategoryLoading: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
  /**
   * @deprecated Use selectIsCategoryPageResolving and selectIsCategoryPageMutating instead
   */
  selectCategoryProductsLoading: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
  /**
   * Selects all errors associated with loading a category.
   */
  selectCategoryErrors: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffStateError[]>;
  /**
   * Selects whether the current category page is mutating; e.g. when a filter is applied to it.
   */
  selectIsCategoryPageMutating: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
  /**
   * Selects whether the current category is resolving; e.g. when the category first loads.
   */
  selectIsCategoryPageResolving: MemoizedSelector<DaffCategoryStateRootSlice<V>, boolean>;
}

const createCategoryPageSelectors = <V extends DaffGenericCategory<V>>(): DaffCategoryPageMemoizedSelectors<V> => {
  const selectCategoryFeatureState = getDaffCategoryFeatureSelector<V>().selectCategoryFeatureState;

  const selectCategoryState = createSelector(
    selectCategoryFeatureState,
    (state: DaffCategoryReducersState<V>) => state.category,
  );

  const selectCategoryPageMetadata = createSelector(
    selectCategoryFeatureState,
    (state: DaffCategoryReducersState<V>) => state.pageMetadata,
  );

  const selectCategoryPageProductIds = createSelector(
    selectCategoryPageMetadata,
    (state: DaffCategoryPageMetadata) => state.ids,
  );

  const selectIsCategoryPageEmpty = createSelector<DaffCategoryStateRootSlice<V>, [ V['product_ids']], boolean>(
    selectCategoryPageProductIds,
    (state: V['product_ids']) => !state.length,
  );

  const selectCategoryPageState = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.daffState,
  );

  const selectCurrentCategoryId = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.id,
  );

  const selectCategoryLoading = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.categoryLoading,
  );

  const selectCategoryProductsLoading = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.productsLoading,
  );

  const selectCategoryErrors = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.errors,
  );

  const selectIsCategoryPageMutating = createSelector(
    selectCategoryPageState,
    (daffState: DaffCategoryReducerState['daffState']) => daffState === DaffState.Mutating,
  );

  const selectIsCategoryPageResolving = createSelector(
    selectCategoryPageState,
    (daffState: DaffCategoryReducerState['daffState']) => daffState === DaffState.Resolving,
  );

  return {
    selectCategoryState,
    selectCategoryPageProductIds,
    selectIsCategoryPageEmpty,
    selectCategoryPageState,
    selectCurrentCategoryId,
    selectCategoryLoading,
    selectCategoryProductsLoading,
    selectCategoryErrors,
    selectIsCategoryPageMutating,
    selectIsCategoryPageResolving,
  };
};

/**
 * A function that returns all selectors related to the category page metadata, category loading, and errors.
 * Returns {@link DaffCategoryPageMemoizedSelectors}.
 */
export const getDaffCategoryPageSelectors = (() => {
  let cache;
  return <V extends DaffGenericCategory<V>>(): DaffCategoryPageMemoizedSelectors<V> => cache = cache
    ? cache
    : createCategoryPageSelectors<V>();
})();
