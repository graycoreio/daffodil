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
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
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
> extends DaffOperationStateSelectors<DaffCategoryStateRootSlice<V>, DaffCategoryReducerState> {
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
   * Selects the id of the current category.
   */
  selectCurrentCategoryId: MemoizedSelector<DaffCategoryStateRootSlice<V>, DaffCategoryPageMetadata['id']>;
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

  const selectCurrentCategoryId = createSelector(
    selectCategoryState,
    (state: DaffCategoryReducerState) => state.id,
  );


  return {
    ...daffOperationStateSelectorFactory(selectCategoryState),
    selectCategoryState,
    selectCategoryPageProductIds,
    selectIsCategoryPageEmpty,
    selectCurrentCategoryId,
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
