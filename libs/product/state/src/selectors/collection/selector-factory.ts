import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffCollectionMemoizedSelectors,
  daffCollectionSelectorFactory,
} from '@daffodil/core/state';
import {
  DaffProductCollectionMetadata,
  daffProductComputeAppliedFilters,
  DaffProductFilter,
} from '@daffodil/product';

import { DaffProductCollectionReducerState } from '../../reducers/collection/state.interface';

/**
 * An interface to describe all selectors related to the product collection metadata.
 */
export interface DaffProductCollectionMemoizedSelectors<
  TState,
  TMetadata extends DaffProductCollectionMetadata = DaffProductCollectionMetadata
> extends DaffCollectionMemoizedSelectors<TState, TMetadata> {
  /**
   * Selects the filters that may be applied to the product collection.
   */
  selectProductCollectionFilters: MemoizedSelector<TState, TMetadata['filters']>;
  /**
   * Returns a dict of filters and only their applied options.
   * Filters with no applied options will be omitted.
   */
  selectProductCollectionAppliedFilters: MemoizedSelector<TState, Record<DaffProductFilter['name'], DaffProductFilter>>;
}

/**
 * Creates product collection selectors.
 *
 * @param selectProductCollectionState A selector for the particular product collection state upon which the returned selectors should operate.
 */
export const daffProductCollectionSelectorFactory = <
  TState,
  TMetadata extends DaffProductCollectionMetadata = DaffProductCollectionMetadata
>(
  selectProductCollectionState: MemoizedSelector<TState, DaffProductCollectionReducerState<TMetadata>>,
): DaffProductCollectionMemoizedSelectors<TState, TMetadata> => {
  const collectionSelectors = daffCollectionSelectorFactory(selectProductCollectionState);

  const selectProductCollectionFilters = createSelector(
    collectionSelectors.selectCollectionMetadata,
    state => state.filters,
  );

  const selectProductCollectionAppliedFilters = createSelector(
    selectProductCollectionFilters,
    filters => daffProductComputeAppliedFilters(filters),
  );

  return {
    ...collectionSelectors,
    selectProductCollectionFilters,
    selectProductCollectionAppliedFilters,
  };
};
