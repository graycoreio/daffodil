import { defaultMemoize } from '@ngrx/store';

import {
  daffCollectionReducerInitialState,
  DaffCollectionStateAdapter,
} from '@daffodil/core/state';
import {
  DaffProductCollectionMetadata,
  DaffProductFilter,
} from '@daffodil/product';

import { DaffProductCollectionReducerState } from './state.interface';

export const daffProductCollectionReducerInitialState: DaffProductCollectionReducerState = {
  ...daffCollectionReducerInitialState,
  filters: {},
};

/**
 * Provides an abstracted way to manage a product collection state.
 *
 * @inheritdoc
 */
export class DaffProductCollectionStateAdapter<T extends DaffProductCollectionReducerState = DaffProductCollectionReducerState> extends DaffCollectionStateAdapter<T> {

  /**
   * Sets the product collection filters.
   */
  setFilters(filters: Record<string, DaffProductFilter>, state: T): T {
    return {
      ...state,
      currentPage: 1,
      filters,
    };
  }

  /**
   * Set the entire product collection metadata at once.
   */
  setMetadata(metadata: DaffProductCollectionMetadata, state: T): T {
    return {
      ...super.setMetadata(metadata, state),
      filters: metadata.filters,
    };
  }
}

/**
 * Create the adapter for the product collection state.
 */
export const getProductCollectionStateAdapter: <T extends DaffProductCollectionReducerState = DaffProductCollectionReducerState>() => DaffProductCollectionStateAdapter<T>
  = defaultMemoize(() => new DaffProductCollectionStateAdapter()).memoized;
